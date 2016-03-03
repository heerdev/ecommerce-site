import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  quantity: 1,

  init() {
    this._super(...arguments);
  },

  weight: Ember.computed('weightSelect', function() {
    if (this.get('weightSelect')) {
      return "Cardstock";
    } else {
      return "Standard Weight";
    }
  }),

  unit: Ember.computed('caseSelected', function() {
    if (this.get('caseSelected')) {
      return this.get('product.case.name');
    } else {
      return this.get('product.unit.name');
    }
  }),

  case_chosen: Ember.computed('caseSelected', function() {
    if (this.get('caseSelected')) {
      return true;
    } else {
      return false;
    }
  }),

  actions: {
    incrementQuantity() {
      this.incrementProperty('quantity');
    },

    decrementQuantity() {
      if (this.get('quantity') > 1) {
        this.decrementProperty('quantity');
      }
    },

    addToCart() {
      var purchase = {
        product: this.get('product'),
        quantity: this.get('quantity'),
        weight: this.get('weight'),
      };

      if (this.get('caseSelected')) {
        purchase.unit = this.get('product.case.name');
        purchase.price = this.get('product.case.price') * this.get('quantity');
      } else {
        purchase.unit = this.get('product.unit.name');
        purchase.price = this.get('product.unit.price') * this.get('quantity');
      }

      this.get('shoppingCart').addToCart(purchase);
      this.set('quantity', 1);
      this.set('caseSelected', false);
      this.set('weightSelect', false);
    }

  }
});
