const Tense = require('./Tense');

/**
 * A 'compound' tense is one which employs an auxiliary word,
 * such as have. The Present is a simple tense 'I go', the past
 * is also simple 'I went', but the Perfect is compound 'I have gone'.
 * 'Have' is the auxiliary.
 */
class CompoundTense extends Tense {
    constructor(prefix, are, ere, ire, ire_sco) {
        super(are, ere, ire, ire_sco);

        this.prefix = prefix;
    }
}

module.exports = CompoundTense;