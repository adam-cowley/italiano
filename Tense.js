function Tense(first_conjugation, second_conjugation, third_conjugation_type_1, third_conjugation_type_2) {
    this.first_conjugation = first_conjugation;
    this.second_conjugation = second_conjugation;
    this.third_conjugation_type_1 = third_conjugation_type_1;
    this.third_conjugation_type_2 = third_conjugation_type_2 || third_conjugation_type_1;

    return this;
}

module.exports = Tense