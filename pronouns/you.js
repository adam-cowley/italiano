var Pronoun = require('../Pronoun');


var you = Pronoun.create('tu', 'i', 'i', 'o', 'isci')
    .addTense('past', 'avi',   'evi',   'ivi')
    .addTense('pastAbsolute', 'asti',  'esti',  'isti')
    .addTense('futureSimple', 'erai',   '(er|ir)ai')
    .addTense('conditional', 'eresti',   '(er|ir)esti')
    .addTense('subjunctive', 'i',    'a',    'a',    'isca')
    .addTense('imperfectSubjunctive', 'assi',    'essi',    'issi')
    .addCompoundTense('presentPerfect', 'ha',     'ato',    '')
    .addCompoundTense('gerund', 'stai',   'ando',    '')

module.exports = you