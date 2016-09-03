var prompt  = require('prompt'),
    say     = require('./numbers'),
    padding = 20,
    minutes = 5,
    end     = new Date();

end.setMinutes(end.getMinutes()+minutes);

function pad(num, chars) {
    if (!chars) chars = 3;

    num = ' '.repeat(chars) + num;

    return num.substr(-chars);
}

function next() {
    prompt.start();

    var a = Math.round(Math.random()*100),
        b = Math.round(Math.random()*100),
        answer = a+b;

    prompt.get({
        properties:{
            a: {description: a+'?'},
            b: {description: b+'?'},
            answer: {description: 'What is '+ a+' + '+ b +'?'},
        }
    }, function(err, res) {
        if (err) {
            console.log('Err!', err);
        }

        var compare = [
            {name: 'a:',      number: a,      correct: say(a),      response: res.a},
            {name: 'b:',      number: b,      correct: say(b),      response: res.b},
            {name: 'answer:', number: answer, correct: say(answer), response: res.answer}
        ]

        compare.forEach(function(row) {
            var is_correct = row.response == row.correct,
                output = [];

            output.push(pad(row.name,8));
            output.push(pad(row.number, 4));
            output.push(pad(row.response, padding));
            output.push(is_correct ? '✔️' : '❌');

            console.log(output.join(' '));

            if (!is_correct) {
                console.log('✔️ =', row.correct)
            }
        });

        if (new Date < end) {
            next();
        }
    });
}

next();

//
//cinquantasette
//cinquantasette