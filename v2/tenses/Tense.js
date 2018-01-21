const {
    ARE, ERE, IRE, IRE_SCO
} = require('../constants');

/**
 * A tense affects the endings of words and can transform
 * an infinitive.  These may be the same (ie current tense - "o")
 * or different based on
 *
 */
class Tense {
    constructor(are, ere, ire, ire_sco) {
        this.endings = new Map([
            [ARE, are], // are
            [ERE, ere || are], // ere
            [IRE, ire || ere || are], // ire
            [IRE_SCO, ire_sco || ire || ere || are], // ire -> isco. Where there is no fourth conjugation type, use the third
        ]);
    }

    for(conjugation) {
        return this.endings.get(conjugation);
    }
}

module.exports = Tense;