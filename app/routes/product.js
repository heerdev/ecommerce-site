import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('product', params.id);
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
