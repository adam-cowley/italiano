var Pronoun = require('../Pronoun');

var i = Pronoun.create('io', 'o', 'o', 'o', 'isco')
    .addTense('past', 'avo',   'evo',   'ivo')
    .addTense('pastAbsolute', 'ai',    'ei',    'ii')
    .addTense('futureSimple', 'erò',    '(er|ir)ò')
    .addTense('conditional', 'erei',     '(er|ir)ei')
    .addTense('subjunctive', 'i',    'a',    'a',    'isca')
    .addTense('imperfectSubjunctive', 'assi',    'essi',    'issi')
    .addCompoundTense('presentPerfect', 'ho',     'ato',    '')
    .addCompoundTense('gerund', 'sto',    'ando')

module.exports = i;