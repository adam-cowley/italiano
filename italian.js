// 7 simple tenses

// 1. Verb.present() il presente dell'indicativo (present indicative)
//    a) to indicate an action or state of being that is taking place (parlo a maria in questo momento)
//    b) to indicate an action or state that is permanent or continuous (parlo italiano)
//    c) to emphasise something at the present time (si, capisco. No, non pari mene)
//    d) to indicate an habitual action (vado al cinema ogni settimana)
//    e) to indicate general truth (due pui due fa quattro - two plus two is four)
//    f) to indicate an action that may occur in the near future (lui arriva domani)

// 2. Verb.imperfect() l'imperfetto dell'indicativo
//    a) to express an action in the past that went on simultaneously to another action (mentre mia madre leggeva, mio padre guardava il sport)
//    b) to express an action that was ongoing as another action in the past (mia soralla ascoltava un CD quando...)
//    c) to indicate a past action, desire, condition (quanto eravamo in italiano, andavano spesso al mare/da bambino volevo sempre...)
//    d) to describe a former, emotional or physical condition, situation or feature (avere, credere, essere, pensare, potere)
//    e) to refer to routine time of day (a che ora avevi lezione d'italiano?)
//    f) to quote someone indirectly in the past (Adam ha detto che veniva anche...)

// 3. Verb.pastAbsolute() il passato remoto - used to express an action completed in the distant or remote past
//    a) i miei genitori emigrarono trent'anni fa
//    b) galileo inventò il telescopio
//

// 4. Verb.futureSimple() - il futuro semplice - the simple future tense is used most of the time as follows:
//    a) To express an action or state of being that will take place at some time in the future
//       1) Domani _andremo_ al cinema
//       2) Lo farò quando avrò tempo
//    b) To express probability
//       1) Quando costerà quell'automobile?
//       2) Saranno le cinque

// 5. Verb.conditional() - il condizionale - The conditional is used most of the time as follows
//    a) To express a condition, potential or hypothetical action
//       1) Andrei al cinema volentieri, ma non ho tempo
//       2) Lo farei, se avessi tempo
//    b) To convey courtesy or politeness
//       1) Mi potrebbe auitare?
//       2) Vorrei un caffè
//    c) To express an indirect action
//       1) Maria ha detto che verebbe domani
//    d) To explain probability
//       1) Quanto costerebbe quel televisore?
//    e) To quote someone else's opinion
//       1) Secondo lui, quella ragazza sarebeb spagnola

// 6. Verb.subjunctive() - il presente del congiuntivo
//    Verbs in the subjunctive mood are used to convey a point of view, fear, doubt, hope, possibility.
//    That is, anything that is not a fact or a certainty.  Specifically, the present subjunctve is used after verbs that express the following:
//    a) Wish, insistence, preference, suggestion or request
//       1) vogio che lo faccio Maria
//       2) Prefereisco che venga anche lui
//    b) Doubt, fear, joy, or some other emotion
//       1) dubito che voi sappiate l'italiano
//       2) Speriamo che tutto vada bene
//    c) Opinion, point of view, perspective, or some other state of mind:
//       1) Penso che sia vero
//       2) Credo che venga anche lei
//
//    d) After certain impersonal expressions that indicate necessity, uncertainty, importance, possibility or likelihood:
//       1) è necessario che lo faccia anche tu
//       2) è importante che vengano anche loro
//    e) After certain conjunctions that indicate a hypothetical state, a condition, purpose, etc
//       1) Benchè piova, esco lo stesso
//       2) Affinchè tu possa riuscire, devi studiare di più
//
//    f) After certain conjunctions of time
//       Prima che arrivino, prepara la cena
//
//    g) After certain adverbs
//       Dovunque tu vada, io ti seguirò
//
//    h) IN wish expressions
//       Che sia vero?
//
// 7. Verb.imperfectSubjunctive() - L'imperfetto del congiuntivo
//    The imperfect subjunctive is used to subordinate caluses for the same reason as the present subjunctive.
//    The main difference between the use of the present subjunctive tense and this tense is the time of the action.
//    If the verb in the main clause is in the present or future, then the present subjunctive in the dependent clause is normally called for.
//    If the main verb is in the past or conditional tense, then the imperfect subjunctive will likely be required
//    1) Penso che sia vero
//       Pensavo che fosse vero
//    2) è importante che venga anche lui
//       Sarebbe importante che venisse anche lui
//
//    The imperfect subjunctive is also used after se (if) in counterfactual statements when the main clause is in the conditional:
//    1) Se tu andassi a Roma, vedresti il Colosseo
//       Se potessimo, andremmo in Italia subito
//
//    It is also used in sentences beginning with magary/if only to express a wish or desire:
//       Magari non piovesse così tanto

// 8. Verb.presentPerfect()  il passato prossimo
//    The present perfect tense is used to refer to simple actions that occurred in the recent past.  It is the most common of all past tenses in Italian.
//    1) Maria ha venduto la sua macchina
//    2) ieri ho parlato al signor Verdi
//    3) Loro hanno dormito troppo ieri
//    4) Ho già mangiato



// Indicative Present =io parlo etc

var
    // Singular
    i   = require('./pronouns/i'),
    you = require('./pronouns/you'),
    he = require('./pronouns/he'),
    she = require('./pronouns/she'),
    it = require('./pronouns/it'),

    // Plural
    we = require('./pronouns/we'),
    you_plural = require('./pronouns/you_plural'),
    they = require('./pronouns/they')
    ;

// Inperfect Indicative
i         ;
you       ;
he        ;
she       ;
it        ;
we        ;
you_plural;
they      ;

// future invicative/past absolute
i
you       ; // & /ette
he        ;
she       ;
it        ;
we        ;
you_plural;
they      ; //-ettero

// indicative future
i         ;
you       ;
he        ;
she       ;
it        ;
we        ;
you_plural;
they      ;

// conditional present - i would talk
i         ;
you       ;
he        ;
she       ;
it        ;
we        ;
you_plural;
they      ;

// Subjunctive Present
i
you       ;
he        ;
she       ;
it        ;
we        ;
you_plural;
they      ;

// Imperfect Subjunctive
i         ;
you       ;
he        ;
she       ;
it        ;
we        ;
you_plural;
they      ;


/*

Since it is a compound tense, the present perfect is formed with the appropriate
form of the auxiliary verb plus the past article of the verb in that order.

To form the past article of regular verbs, drop the infinitive ending (-are,
-ere, -ire). and add the following endings to the resulting stems: (-ato
to first conjugations, -uto to second conjugations, -ito to third conjugations)

parlare/to speak
parlato/spoken
vendere/to sell
venduto/sold
capire/to understand
capito/understood

There are two auxiliary verbs: avere/to have and essere/to be.  In the present
perfect, these are in the present indicative.

In past participle of verbse conjugated with essere agrees in number and gender
with the subject.

1) Alessandro è arrivato ieri
2) Anche Sara è arrivata ieri

Avere or essere?  Assume most verbs are conjugated with avre, then memorise the
few that are conjugated with essere.  The most common verbs conjugated with essere:

andare/to go
arrivare/to arrive
cadere/to fall
entrare/to enter
essere/to be
diventare/to become
morire/to dieay
nascere/to be born
partire/to leave
stare/to st
sembrare/to seem
tornare/to return
uscire/to go out
venire/to come
 */

i         ;
you       ;
he        ;
she       ;
it        ;
we        ;
you_plural;
they      ;


// Gerund
i         ;
you       ;
he        ;
she       ;
it        ;
we        ;
you_plural;
they      ;


/*
i         .addTense('futureSimple', '',    '',    '');
you       .addTense('futureSimple', '',    '',    '');
he        .addTense('futureSimple', '',    '',    '');
she       .addTense('futureSimple', '',    '',    '');
it        .addTense('futureSimple', '',    '',    '');
we        .addTense('futureSimple', '',    '',    '');
you_plural.addTense('futureSimple', '',    '',    '');
they      .addTense('futureSimple', '',    '',    '');


i         .addCompoundTense('futureSimple', '',    '',    '');
you       .addCompoundTense('futureSimple', '',    '',    '');
he        .addCompoundTense('futureSimple', '',    '',    '');
she       .addCompoundTense('futureSimple', '',    '',    '');
it        .addCompoundTense('futureSimple', '',    '',    '');
we        .addCompoundTense('futureSimple', '',    '',    '');
you_plural.addCompoundTense('futureSimple', '',    '',    '');
they      .addCompoundTense('futureSimple', '',    '',    '');
*/
/*

*/

/*
var i = {
    pronoun: 'io',
    ending: 'o',
    verb:function(verb) {

    }
};

var he = {
    pronoun: 'lui',
    ending: 'a',
    verb:function(verb) {
        return translate(this, verb);
    }
};
*/

var pronouns = [
    i,
    you,
    he,
    she,
    it,
    we,
    you_plural,
    they
];
var tenses = [
    // 'present',
    // 'past',
    // 'pastAbsolute',
    // 'futureSimple',
    'conditional',
    // 'subjunctive',
    // 'imperfectSubjunctive',
    // 'presentPerfect',
    // 'gerund'

];
var verbs = require('./verbs/index');

//{
    //'To Talk': talk,
    //'To See': see,
    //'To Sleep': sleep,
    //'To Understand': understand,
    //'To Sell': sell,
    //'To Finish': finish,
    //'To Arrive': arrive
//}


for (var infinitive in verbs) {
    console.log('+', infinitive);
    var verb = verbs[infinitive];

    tenses.forEach(function(tense) {
        console.log('|  +', tense);
        pronouns.forEach(function(pronoun, index) {
            console.log('|  |  -',
                pronoun[tense](verb)
            )
        });
    });

}


/*
console.log(i.verb(talk));      // io parlo
console.log(you.verb(talk));    // tu parli
console.log(he.verb(talk));     // lui parla
console.log(she.verb(talk));    // lei parla
console.log(it.verb(talk));     // lei parla
console.log(you_plural.verb(talk)); // voi parlete
console.log(we.verb(talk));     // noi parliamo
console.log(they.verb(talk));   // loro parlono
console.log(i.past(talk));          // io parlavo
console.log(you.past(talk));        // tu parlavi
console.log(he.past(talk));         // lui parlava
console.log(we.past(talk));         // noi parlavamo
console.log(you_plural.past(talk)); // voi parlavate
console.log(they.past(talk));       // loro parlavano

console.log('-- To See');
console.log(i.verb(see));       // io vedo
console.log(you.verb(see));     // tu vedi
console.log(he.verb(see));      // lui veda
console.log(she.verb(see));     // lei veda
console.log(it.verb(see));      // lei veda
console.log(you_plural.verb(see));  // voi vedete
console.log(we.verb(see));      // noi vediamo
console.log(they.verb(see));    // loro vedono

console.log('-- To Sleep');
console.log(i.verb(sleep));     // io dormo
console.log(you.verb(sleep));   // tu dormi
console.log(he.verb(sleep));        // lui dorma
console.log(she.verb(sleep));   // lei dorma
console.log(it.verb(sleep));        // lei dorma
console.log(you_plural.verb(sleep));    // voi dormite
console.log(we.verb(sleep));        // noi dormiamo
console.log(they.verb(sleep));  // loro dormono

console.log('-- To Understand');
/*
console.log(i.verb(understand));        // io capisco
console.log(you.verb(understand));  // tu capisci
console.log(he.verb(understand));       // lui capisce
console.log(she.verb(understand));  // lei capisce
console.log(it.verb(understand));       // lei capisce
console.log(you_plural.verb(understand));   // voi capisce
console.log(we.verb(understand));       // noi campiamo
console.log(they.verb(understand)); // loro capiscono


console.log(i.past(understand));          // io capivo
console.log(you.past(understand));        // tu capivi
console.log(he.past(understand));         // lui capiva
console.log(we.past(understand));         // noi capivamo
console.log(you_plural.past(understand)); // voi capivate
console.log(they.past(understand));       // loro caoivano


/*
console.log('');
console.log('--Understand');
console.log(i.verb(understand));
console.log(he.verb(understand));
console.log(she.verb(understand));
console.log(it.verb(understand));

