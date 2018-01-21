const Tense = require('../tenses/Tense');
const CompoundTense = require('../tenses/CompoundTense');

const {
    ESSERE,
    PRONOUNS,
    TENSES,
} = require('../constants');

class Pronoun {
    constructor(prefix, ...conjugations) {
        this.type = PRONOUNS[ prefix ];
        this.prefix = prefix;
        this.conjugations = conjugations;

        this.plural = false;
        this.masculine = true;
        this.tenses = new Map();
    }

    isPlural() {
        this.plural = true;

        return this;
    }

    isFeminine() {
        this.masculine = false;

        return this;
    }

    addTense(reference, ...endings) {
        this.tenses.set(reference, new Tense(...endings));
        return this;
    }

    addCompoundTense(reference, ...endings) {
        this.tenses.set(reference, new CompoundTense(...endings));
        return this;
    }

    returnTense(verb, tenseName, show_prefix = true) {
        // Get Tense from Map
        const tense = this.tenses.get(tenseName);

        // If this is an irregular verb, return the iregularity
        if ( verb.irregularities.has(this.type) && verb.irregularities.get(this.type).has(tenseName) )  {
            let irregular = verb.irregularities.get(this.type).get(tenseName);

            if ( show_prefix )  {
                irregular = `${this.prefix} ${irregular}`;
            }

            return irregular;
        }

        // Work out ending
        const ending = verb.infinitive.substr(-3);
        const stem = verb.infinitive.replace(ending, '');

        // ere or ire?
        const er_ir = ending.substr(0, 2);

        const conjugation = tense.for(verb.conjugation);

        let prefix = '';

        if ( show_prefix ) {
            // Prepend pronoun
            prefix = `(${this.prefix})`;

            // For Compound Tenses, use the present tense of the auxiliary verb (avere, essere)
            if ( tense instanceof CompoundTense ) {
                prefix += ` ${this.returnTense( verb.auxiliary, TENSES.present, false )}`;
            }
        }

        return `${prefix} ${stem}${conjugation}`;
    }

    present(verb) {
        return this.returnTense(verb, TENSES.present);
    }

    past(verb) {
        return this.returnTense(verb, 'past');
    }

    pastAbsolute(verb) {
        return this.returnTense(verb, 'pastAbsolute');
    }

    futureSimple(verb) {
        return this.returnTense(verb, 'futureSimple');
    }

    conditional(verb) {
        return this.returnTense(verb, 'conditional');
    }

    subjunctive(verb) {
        return this.returnTense(verb, 'subjunctive');
    }

    imperfectSubjunctive(verb) {
        return this.returnTense(verb, 'imperfectSubjunctive');
    }

    presentPerfect(verb, auxiliary) {
        return this.returnTense(verb, 'presentPerfect', auxiliary);
    }

    gerund(verb) {
        return this.returnTense(verb, 'gerund');
    }

    am(verb) {
        return this.gerund(verb);
    }

    are(verb) {
        return this.gerund(verb);
    }

    is(verb) {
        return this.gerund(verb);
    }
}

Pronoun.create = function(pronoun) {
    return new Pronoun(pronoun);
}

Pronoun.createPlural = function(pronoun) {
    const output = new Pronoun(pronoun);

    return output.isPlural();
}

module.exports = Pronoun;


