var prompt  = require('prompt'),
    days    = require('./dates/days'),
    options = Object.keys(days),

    total   = options.length,
    correct  = 0;


function next() {
    var index = Math.floor( Math.random()* options.length) ;
    var day = options.splice(index, 1)[0];

    prompt.get({properties:{q: {description: day+'?'}}}, function(err, res) {
        var is_correct = false;
        var answer = res.q;

        var correct_answer = days[ day ].name;
        var also_acceptable = days[ day ].name.replace('ì', 'i');

        if ( correct_answer == answer || also_acceptable == answer ) {
            is_correct = true;
            correct++;
        };

        console.log(is_correct ? '✔️' : '❌', ' ', days[ day ].name, '('+ days[day].abbr +')');


        if ( options.length ) {
            return next();
        }

        console.log('You got ', correct, 'out of ', total)

        process.exit();
    });
}

next();
