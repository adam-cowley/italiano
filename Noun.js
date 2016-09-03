function Noun(noun, gender) {
	this.noun = noun;
	
	if (gender) {
		this.gender = gender;
	}
	else {
		this.gender = noun.substr(-1) == 'o' ? Noun.masculine : Noun.feminine;
	}
}

Noun.masculine = 'MASCULINE';
Noun.feminine = 'FEMININE';

module.exports = Noun;