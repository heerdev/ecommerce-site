import Ember from 'ember';

export function pluralizer(params) {

  var inflector = new Ember.Inflector(Ember.Inflector.defaultRules);

  var quantity = params[0];
  var unit = params[1];
  if (quantity > 1) {
    return inflector.pluralize(unit);
  } else {
    return unit;
  }
}

export default Ember.Helper.helper(pluralizer);
