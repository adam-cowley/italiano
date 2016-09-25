var Pronoun = require('./Pronoun');

var we = new Pronoun('noi', 'iamo', 'iamo', 'iamo', 'isciamo')
    .addTense('past', 'avamo', 'avamo', 'ivamo')
    .addTense('pastAbsolute', 'ammo',  'emmo',  'immo')
    .addTense('futureSimple', 'eremo',  '(er|ir)emo')
    .addTense('conditional', 'eremmo',   '(er|ir)emmo')
    .addTense('subjunctive', 'iamo', 'iamo', 'iamo', 'iamo')
    .addTense('imperfectSubjunctive', 'assimo',  'essimo',  'issimo')

    .addCompoundTense('presentPerfect', 'abbiamo','ato',    '')
    .addCompoundTense('gerund', 'siamo',  'ando',    '')


module.exports = we;