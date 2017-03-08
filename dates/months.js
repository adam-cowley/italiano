function Month(name) {
    this.name = name;
}

module.exports = {
   january: new Month('gennaio'),
   february: new Month('febbraio'),
   march: new Month('marzo'),
   april: new Month('aprile'),
   may: new Month('maggio'),
   june: new Month('guigno'),
   july: new Month('luglio'),
   august: new Month('agosto'),
   september: new Month('settembre'),
   october: new Month('ottobre'),
   november: new Month('novembre'),
   december: new Month('dicembre')
};