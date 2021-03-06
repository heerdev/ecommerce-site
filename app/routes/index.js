import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      bestProduct: this.store.findRecord('product', 1),
      allProducts: this.store.query('product', {limitToLast: 2})
    });
  },

  actions: {
    goToProduct(id) {
      this.transitionTo('product', id);
    },
    goToShoppingCart() {
      this.transitionTo('shopping-cart');
    }
  }
});
