import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    // removeFromCart() {
    //
    // },

    incrementQuantity() {
      var quantity = this.get("item.quantity");
      this.set("item.quantity", quantity += 1);
      this.set("item.price", (this.get("item.price_per_quantity") * (quantity)));
      this.get('shoppingCart').addToTotal(this.get("item.price_per_quantity"));
    },

    decrementQuantity() {
      var quantity = this.get("item.quantity");
      if (this.get('item.quantity') > 1) {
        this.set("item.quantity", quantity -= 1);
        this.set("item.price", (this.get("item.price_per_quantity") * (quantity)));
        this.get("shoppingCart").subtractFromTotal(this.get("item.price_per_quantity"));
      }
    },
  }
});
