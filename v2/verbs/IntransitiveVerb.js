const Verb = require('./Verb');

const { essere } = require('./auxiliary');

/**
 * Intransitive Objects are objects that cannot be transferred
 * to another object.
 *
 * You use ESSERE with Intransitive verbs  (Sono stato...)
 *
 * If you try to add a direct object to an intranstive verb then
 * the sentence will not make sense. (ie. I go the gym)
 */
class IntransitiveVerb extends Verb {
    constructor(infinitive, conjugation) {
        super(infinitive, conjugation);

        this.auxiliary = essere;
    }
}

module.exports = IntransitiveVerb;