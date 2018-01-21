const {
    ARE, ERE, IRE, IRE_SCO,
    AVERE, ESSERE,
    TENSES,
} = require('./constants');


const TransitiveVerb = require('./verbs/TransitiveVerb');
const IntransitiveVerb = require('./verbs/IntransitiveVerb');
const ReflexiveVerb = require('./verbs/ReflexiveVerb');

/**
 * First conjunction: -are
 *
 *   io guido
 *   tu guidi
 *   lui guida
 *   noi guidiamo
 *   voi guidate
 *   loro guidano
 */
const arrive = new IntransitiveVerb('arrivare', ARE);
const drive = new TransitiveVerb('guidare', ARE);
const wash = new ReflexiveVerb('lavare', ARE);

/**
 * Second conjunction: -ere
 *
 *   io vedo
 *   tu vedi
 *   lui vede
 *   noi vedete
 *   voi vediamo
 *   loro vedono
 * /
const see = new TransitiveVerb('vedere', ERE);
const fall = new IntransitiveVerb('cadere', ERE);

/**
 * Third conjunction: -ire
 *
 *   io parto
 *   tu parti
 *   lui parta
 *   noi partiamo
 *   voi partite
 *   loro partono
 * /
const leave = new TransitiveVerb('partire', IRE);
// const discover = new TransitiveVerb('scopire', 3);

/**
 * Third conjunction, second type: -ire
 * Use isc rather than an
 *
 *   io finisco
 *   tu finisci
 *   lui finisce
 *   noi finiamo
 *   voi finete
 *   loro finiscono
 */
const finish = new TransitiveVerb('finire', IRE_SCO);



const Pronoun = require('./pronouns/Pronoun');


const i = Pronoun.create('io')
    .addTense(TENSES.present, 'o', 'o', 'o', 'isco')
    .addTense('past', 'ava',   'eva',   'iva')
    .addTense('pastAbsolute', 'ai',    'ei',    'ii')
    .addTense('futureSimple', 'erò',    '(er|ir)ò')
    .addTense('conditional', 'erei',     '(er|ir)ei')
    .addTense('subjunctive', 'i',    'a',    'a',    'isca')
    .addTense('imperfectSubjunctive', 'assi',    'essi',    'issi')
    .addCompoundTense('presentPerfect', 'ho',   'ato', 'ito')
    .addCompoundTense('gerund', 'sto', 'ando', 'endo');;

// const he = Pronoun.create('lui')
//     .addTense('present', 'a', 'a', 'e', 'isce');

;  //  require('../pronouns/i');

// const verbs = { arrive };
// const pronouns = [
//     i,
//     // he
// ];
// const tenses = [
//     'present',
//     'past',
//     'pastAbsolute',
//     'futureSimple',
//     'conditional',
//     'subjunctive',
//     'imperfectSubjunctive',
//     'presentPerfect',
//     'gerund'
// ];


// for ( var infinitive in verbs ) {
//     console.log('');
//     console.log('');
//     console.log('');
//     console.log('+', infinitive);
//     var verb = verbs[infinitive];

//     tenses.forEach(tense => {
//         console.log('|  +', tense);

//         pronouns.forEach(pronoun => {
//             console.log('|  |  -',
//                 pronoun[tense](verb)
//             );
//         });
//     });

// }
//
console.log(new Date());
console.log('--');
console.log('');

// console.log(i.present(require('./verbs/be')));

console.log( i.present(arrive) );
console.log( i.presentPerfect(arrive) );

console.log( i.present(drive) );
console.log( i.presentPerfect(drive) );


console.log('');
console.log('');
console.log('');