const { BussinecessRepo } = require('../repository/cart')
const StoreRepo = require('../repository/store')

const store = new StoreRepo()
const business = new BussinecessRepo()

function addProductToCart(idCart, idProduct){
    let product = store.getProduct(idProduct)
    let result = business.insertProduct(idCart, product)
    return result
}

module.exports = {
    store, 
    addProductToCart

}