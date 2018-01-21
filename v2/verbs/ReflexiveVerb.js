const Verb = require('./Verb');

/**
 * A reflexive verb is one whose direct object is the same as the
 * subject itself (ie . I wash myself, I apply suncreme to myself)
 */
class ReflexiveVerb extends Verb {}

module.exports = ReflexiveVerb;