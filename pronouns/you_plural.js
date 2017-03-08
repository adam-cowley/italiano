var Pronoun = require('./Pronoun');

var you_plural = new Pronoun('voi', 'ate', 'ete','ite', 'ite')
    .addTense('past', 'avate', 'evate', 'ivate')
    .addTense('pastAbsolute', 'aste',  'este',  'iste')
    .addTense('futureSimple', 'erete',  '(er|ir)ete')
    .addTense('conditional', 'ereste',   '(er|ir)este')
    .addTense('subjunctive', 'iate', 'iate', 'iate', 'iate')
    .addTense('imperfectSubjunctive', 'aste',    'este',    'iste')
    .addCompoundTense('presentPerfect', 'avete',  'ato',    'ito')
    .addCompoundTense('gerund', 'siete',  'ando',    'endo');

module.exports = you_plural;