class CartRepo {
  constructor(id) {
    this.id = id;
    this.timestamp = Date.now();
    this.products = [];
  }
}

class BussinecessRepo {
  constructor() {
    this.carts = [];
    this.counter_id = 0;
  }
  createCart() {
    this.counter_id++;

    const cart = new CartRepo(this.counter_id);

    this.carts.push(cart);

    return true;
  }

  getProduct(id) {
    let cart = this.carts.find((c) => c.id == id);

    return cart.products;
  }
  insertProduct(idCart, product) {
    let cart = this.almacen.find((c) => c.id == idCart);

    cart.products.push(product);

    return cart.products;
  }
}

module.exports = { BussinecessRepo, CartRepo };
