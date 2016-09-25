function Day(name, abbr) {
    this.name = name;
    this.abbr = abbr;
}

module.exports = {
    sunday: new Day('domenica', 'do'),
    monday: new Day('lunedì', 'lun'),
    tuesday: new Day('martedì', 'mar'),
    wednesday: new Day('mercoledì', 'mer'),
    thursday: new Day('giovedì', 'gio'),
    friday: new Day('venerdì', 'ven'),
    saturday: new Day('sabato', 'sab')
};