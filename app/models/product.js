import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  main_description: DS.attr(),
  secondary_description: DS.attr(),
  unit: DS.attr(),
  case: DS.attr()
});
