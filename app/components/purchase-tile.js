import Ember from 'ember';

export default Ember.Component.extend({
  case: true,

  weight: Ember.computed('weightSelect', function() {
    if (this.get('weightSelect')) {
      return "Standard";
    } else {
      return "Cardstock";
    }
  }),

  unit: Ember.computed('caseSelected', function() {
    if (this.get('caseSelected')) {
      this.set('case', true);
      console.log(this.get("case"));
      return this.get('product.case.name');
    } else {
      this.set('case', false);
      console.log(this.get("case"));
      return this.get('product.unit.name');
    }
  }),
});
