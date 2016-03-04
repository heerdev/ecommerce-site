import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  checkout: false,
  stuffInCart: Ember.computed(function() {
    return this.get("shoppingCart.items").length;
  }),

  actions: {
    checkout() {
      this.set("checkout", true);
    },

    submitOrder() {
      var name = this.get("name");
      alert("Thanks for your order, " + name + "! We'll deliver your order for FREE on Tuesday!");
    }
  }
});
