import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    goToProduct(id) {
      this.transitionTo('product', id);
    },
    goToShoppingCart() {
      this.transitionTo('shopping-cart');
    }
  }
});
