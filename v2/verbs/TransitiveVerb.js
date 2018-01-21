const Verb = require('./Verb');

const { avere } = require('./auxiliary');

/**
 * A verb that can be transferred to another object
 *
 * You use AVERE with a transitive verb. (Ho guardato...)
 */
class TransitiveVerb extends Verb {
    constructor(infinitive, conjugation) {
        super(infinitive, conjugation);

        this.auxiliary = avere;
    }
}

module.exports = TransitiveVerb;