var Pronoun = require('./Pronoun');

var it = new Pronoun('è', 'a', 'e', 'e', 'isce')
    .addTense('past', 'ava',   'eva',   'iva')
    .addTense('pastAbsolute', 'ò',     'è',     'ì')
    .addTense('futureSimple', 'erà',    '(er|ir)à')
    .addTense('conditional', 'erebbe',   '(er|ir)ebbe')
    .addTense('subjunctive', 'i',    'a',    'a',    'isca')
    .addTense('imperfectSubjunctive', 'asse',    'esse',    'isse')
    .addCompoundTense('presentPerfect', 'ha',     'ato',    'ito')
    .addCompoundTense('gerund', 'sta',    'ando',    'endo');

module.exports = it;