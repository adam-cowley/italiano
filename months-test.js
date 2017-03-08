var prompt  = require('prompt'),
    months  = require('./dates/months'),
    options = Object.keys(months),

    total   = options.length,
    correct  = 0;


function next() {
    var index = Math.floor( Math.random()* options.length) ;
    var month = options.splice(index, 1)[0];

    prompt.get({properties:{q: {description: month+'?'}}}, function(err, res) {
        var is_correct = false;
        var answer = res.q;

        var correct_answer = months[ month ].name;
        var also_acceptable = months[ month ].name.replace('ì', 'i');

        if ( correct_answer == answer || also_acceptable == answer ) {
            is_correct = true;
            correct++;
        };

        console.log(is_correct ? '✔️' : '❌', ' ', months[ month ].name);


        if ( options.length ) {
            return next();
        }

        console.log('You got ', correct, 'out of ', total)

        process.exit();
    });
}

next();
