const IrregularVerb = require('./IrregularVerb');

const { TENSES, PRONOUNS } = require('../constants');

const be = new IrregularVerb('essere')
    .addIrregularity(PRONOUNS.io, TENSES.present, 'sono')
    .addIrregularity(PRONOUNS.ti, TENSES.present, 'sono')
    .addIrregularity([PRONOUNS.lui, PRONOUNS.lei, PRONOUNS.ė], TENSES.present, 'sono')
    .addIrregularity(PRONOUNS.voi, TENSES.present, 'siete')
    .addIrregularity(PRONOUNS.noi, TENSES.present, 'siamo')
    .addIrregularity(PRONOUNS.loro, TENSES.present, 'sono');

module.exports = be;