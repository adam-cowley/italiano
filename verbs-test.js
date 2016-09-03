var prompt   = require('prompt'),
    pronouns = require('./pronouns/index'),
    verbs    = require('./verbs/index');

var tenses = {
    'present': 's',
    'past': 'ed'

};

Array.prototype.randomise = function() {
    return this.sort(function() { return 0.5 - Math.random() });
}


function next() {

    var pronoun = Object.keys(pronouns).randomise()[0];
    var verb = Object.keys(verbs).randomise()[0];
    var tense = Object.keys(tenses).randomise()[0];

    console.log(pronoun, verb, tense);


    console.log(pronoun, verb + tenses[tense]);

}

next();