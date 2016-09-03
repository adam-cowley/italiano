function CompoundTense(first_conjugation_prefix, first_conjugation /*..., second_conjugation*/) {
    this.first_conjugation_prefix = first_conjugation_prefix;
    this.first_conjugation = first_conjugation;

    return this;
}

module.exports = CompoundTense;