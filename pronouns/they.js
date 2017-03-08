var Pronoun = require('./Pronoun');

var they = new Pronoun('loro', 'ono', 'ono', 'ono', 'iscono')
    .addTense('past', 'avano', 'evano', 'ivano')
    .addTense('pastAbsolute', 'arono', 'erono', 'irono')
    .addTense('futureSimple', 'eranno', '(er|ir)anno')
    .addTense('conditional', 'erebbero', '(er|ir)ebbero')
    .addTense('subjunctive', 'ino',  'ano',  'ano',  'iscano')
    .addTense('imperfectSubjunctive', 'assero',  'essero',  'issero')
    .addCompoundTense('presentPerfect', 'avevano','ato',    'ito')
    .addCompoundTense('gerund', 'stanno', 'ando',    'endo');

module.exports = they;