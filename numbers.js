var vowels = ['a', /*'e',*/ 'i', 'o', 'u'];

var single = [
	'zero',
	'uno',
	'due',
	'tre',
	'quattro',
	'cinque',
	'sei',
	'sette',
	'otto',
	'nove',
];

var tens = [
	null, 
	'dieci', 
	'venti', 
	'trenta', 
	'quaranta', 
	'cinquanta', 
	'sessanta', 
	'settanta', 
	'ottanta', 
	'novanta'
];

var hundreds = [
	null,
	'cento',
	'duecento', 
	'trecento', 
	'quattrocento', 
	'cinquecento', 
	'seicento', 
	'settecento', 
	'ottocento', 
	'novecento',
];

var numbers = [
	single,
	tens,
	hundreds
];

var teens = {
	11: 'undici',
	12: 'dodici',
	13: 'tredici',
	14: 'quattordici',
	15: 'quindici',
	16: 'sedici'
}

function say(number) {
	number = number.toString();

	var output = [''], index = 0;

	if (teens[number]) {
		return teens[number];
	}

	for (var i = number.length; i > 0; i--) {
		var number_index = number.length - i,
			this_number = number.substr(i-1, 1),
			last_number = number.substr(i, 1),
			to_prepend = numbers[ number_index ][ this_number ],
			first_letter = output[0].substr(0, 1),
			last_letter = to_prepend ? to_prepend.substr(-1) : '';

		if ( i == 2 && teens[ this_number+last_number ] ) {
			output = [teens[ this_number+last_number ]];
		}

		else if (this_number > 0) {
			// Strip Vowel?
			if ( vowels.indexOf(first_letter) > -1 && vowels.indexOf(last_letter) > -1 ) {
				to_prepend = to_prepend.substr(0, to_prepend.length -1);
			}

			output.unshift(to_prepend);
		}
	}

	return output.join('');
}

module.exports = say;