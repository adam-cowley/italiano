const AuxiliaryVerb = require('./AuxiliaryVerb');

const { TENSES, PRONOUNS } = require('../constants');

const have = new AuxiliaryVerb('avere')
    .addIrregularity(PRONOUNS.io, TENSES.present, 'ho')
    .addIrregularity(PRONOUNS.ti, TENSES.present, 'hai')
    .addIrregularity([PRONOUNS.lui, PRONOUNS.lei, PRONOUNS.ė], TENSES.present, 'ha')
    .addIrregularity(PRONOUNS.voi, TENSES.present, 'avete')
    .addIrregularity(PRONOUNS.noi, TENSES.present, 'abbiamo')
    .addIrregularity(PRONOUNS.loro, TENSES.present, 'hanno');;

module.exports = have;