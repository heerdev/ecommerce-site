import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: 0,

  addToCart(purchase) {
    this.get('items').pushObject(purchase);
    this.set('total', (this.get('total') + purchase.price));
  },

  removeFromCart(purchase) {
    this.get('items').removeObject(purchase);
    this.set('total', (this.get('total') - purchase.price));
  },

  addToTotal(number) {
    this.set('total', (this.get('total') + number));
  },

  subtractFromTotal(number) {
    this.set('total', (this.get('total') - number));
  }
});
