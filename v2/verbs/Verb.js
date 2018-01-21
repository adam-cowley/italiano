const { ARE, ERE, IRE, IRE_SCO } = require('../constants');

class Verb {
    constructor(infinitive, conjugation) {
        this.infinitive = infinitive;
        this.conjugation = conjugation || this._calculateConjugation(infinitive);

        this.irregularities = new Map();
    }

    _calculateConjugation(infinitive) {
        switch ( infinitive.substr(-3) ) {
            case 'are':
                return ARE;
            case 'ere':
                return ERE;
            case 'ire':
                return IRE; // You can't automatically decide the third conjugation
        }
    }

    addIrregularity(pronoun, tense, rules) {
        // Handle arrays of Pronouns
        if ( Array.isArray(pronoun) ) {
            pronoun.map(pronoun => this.addIrregularity(pronoun, tense, rules));

            return this;
        }

        // Single Pronoun
        if ( !this.irregularities.has(pronoun) ) {
            this.irregularities.set(pronoun, new Map);
        }

        this.irregularities.get(pronoun).set(tense, rules);

        return this;
    }
}

module.exports = Verb;