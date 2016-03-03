import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  addToCart(purchase) {
    this.get('items').pushObject(purchase);
    console.log(this.get('items'));
  },
});
