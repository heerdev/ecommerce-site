import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      mainProduct: this.store.findRecord('product', '1'),
      otherProducts: this.store.findAll('product')
    });
  }
});
