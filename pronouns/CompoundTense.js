function CompoundTense(first_conjugation_prefix, first_conjugation, second_conjugation, third_conjugation) {
    this.first_conjugation_prefix = first_conjugation_prefix;
    this.first_conjugation = first_conjugation;
    this.second_conjugation = second_conjugation || first_conjugation;
    this.third_conjugation_type_1 = third_conjugation || second_conjugation || first_conjugation;
    this.third_conjugation_type_2 = this.third_conjugation_type_1;

    return this;
}

module.exports = CompoundTense;