var Tense = require('./Tense');
var CompoundTense = require('./CompoundTense');

function Pronoun(pronoun, first_conjugation, second_conjugation, third_conjugation_type_1, third_conjugation_type_2) {
	this.pronoun = pronoun;

	this.tenses = {
		present: new Tense(first_conjugation, second_conjugation, third_conjugation_type_1, third_conjugation_type_2)
	};
}

Pronoun.prototype.addTense = function(tense, first_conjugation, second_conjugation, third_conjugation_type_1, third_conjugation_type_2) {
	this.tenses[tense] = new Tense(first_conjugation, second_conjugation, third_conjugation_type_1, third_conjugation_type_2);

	return this;
}

Pronoun.prototype.addCompoundTense = function(tense, first_conjugation_prefix, first_conjugation) {
	this.tenses[tense] = new CompoundTense(first_conjugation_prefix, first_conjugation);

	return this;
}

Pronoun.prototype.getTense = function(tense) {
	return this.tenses[tense];
}

Pronoun.prototype.returnTense = function(verb, tense) {
	var ending = verb.infinitive.substr(-3);
	var er_ir = ending.substr(0,2);

	var conjugation = '';
	var prefix = '';

	//switch (ending) {
	switch (verb.conjugation) {
		//case 'are':
		case 1:
			conjugation = this.getTense(tense).first_conjugation;
			prefix = this.getTense(tense).first_conjugation_prefix || '';
			break;

		case 2:
			conjugation = this.getTense(tense).second_conjugation;
			break;

		case 3:
			conjugation =
				verb.conjugation_type == 1
				? this.getTense(tense).third_conjugation_type_1
				: this.getTense(tense).third_conjugation_type_2;

			// If there is no third conjugation, use the second
			if (!conjugation) {
				conjugation = this.getTense(tense).second_conjugation;
			}
			break;
	}

	conjugation = conjugation.replace('(er|ir)', er_ir);

	var new_verb = prefix + ' '+ verb.infinitive.replace(ending, '') + conjugation;

	return [this.pronoun, '\t', new_verb].join(' ');
}

Pronoun.prototype.present = function(verb) {
	return this.returnTense(verb, 'present');
}

Pronoun.prototype.past = function(verb) {
	return this.returnTense(verb, 'past');
}

Pronoun.prototype.pastAbsolute = function(verb) {
	return this.returnTense(verb, 'pastAbsolute');
}

Pronoun.prototype.futureSimple = function(verb) {
	return this.returnTense(verb, 'futureSimple');
}

Pronoun.prototype.conditional = function(verb) {
	return this.returnTense(verb, 'conditional');
}

Pronoun.prototype.subjunctive = function(verb) {
	return this.returnTense(verb, 'subjunctive');
}

Pronoun.prototype.imperfectSubjunctive = function(verb) {
	return this.returnTense(verb, 'imperfectSubjunctive');
}

Pronoun.prototype.presentPerfect = function(verb) {
	return this.returnTense(verb, 'presentPerfect');
}

Pronoun.prototype.gerund = function(verb) {
	return this.returnTense(verb, 'gerund');
}

Pronoun.create = function(pronoun, first_conjugation, second_conjugation, third_conjugation_type_1, third_conjugation_type_2) {
	return new Pronoun(pronoun, first_conjugation, second_conjugation, third_conjugation_type_1, third_conjugation_type_2);
}

module.exports = Pronoun;