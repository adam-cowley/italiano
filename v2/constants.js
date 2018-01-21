/**
 * Conjugations
 * 1. are
 * 2. ere
 * 3. ire
 * 4. ire -> isco
 */
const ARE = 1;
const ERE = 2;
const IRE = 3;
const IRE_SCO = 4;

/**
 * Avere or Essere?
 */
const AVERE = 'AVERE';
const ESSERE = 'ESSERE';

/**
 * First, second person?
 */
const FIRST_PERSON = 1; // io
const FIRST_PERSON_PLURAL = '1P' // noi
const SECOND_PERSON = 2; // te
const SECOND_PERSON_PLURAL = '2P'; // voi
const THIRD_PERSON = 3; // lui, lei
const THIRD_PERSON_PLURAL = '3P'; // loro

/**
 * Past, present, future
 */
const TENSE_PRESENT = 'TENSE_PRESENT';
const TENSE_PAST = 'TENSE_PAST';
const TENSE_PAST_ABSOLUTE = 'TENSE_PAST_ABSOLUTE';
const TENSE_FUTURE_SIMPLE = 'TENSE_FUTURE_SIMPLE';
const TENSE_CONDITIONAL = 'TENSE_CONDITIONAL';
const TENSE_SUBJUNCTIVE = 'TENSE_SUBJUNCTIVE';
const TENSE_SUBJUNCTIVE_IMPERFECT = 'TENSE_SUBJUNCTIVE_IMPERFECT';
const TENSE_PRESENT_PERFECT = 'TENSE_PRESENT_PERFECT';
const TENSE_GERUND = 'TENSE_GERUND';


module.exports = {
    ARE, ERE, IRE, IRE_SCO,
    AVERE, ESSERE,

    PRONOUNS: {
        io: FIRST_PERSON,
        ti: SECOND_PERSON,
        lui: THIRD_PERSON,
        lei: THIRD_PERSON,
        è: THIRD_PERSON,
        voi: SECOND_PERSON_PLURAL,
        noi: FIRST_PERSON_PLURAL,
        loro: THIRD_PERSON_PLURAL,
    },

    TENSES: {
        present: TENSE_PRESENT,
        past: TENSE_PAST,
        pastAbsolute: TENSE_PAST_ABSOLUTE,
        futureSimple: TENSE_FUTURE_SIMPLE,
        conditional: TENSE_CONDITIONAL,
        subjunctive: TENSE_SUBJUNCTIVE,
        imperfectSubjunctive: TENSE_SUBJUNCTIVE_IMPERFECT,
        presentPerfect: TENSE_PRESENT_PERFECT,
        gerund: TENSE_GERUND,
    },
};