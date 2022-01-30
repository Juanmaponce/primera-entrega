const express = require('express')
const { route } = require('express/lib/application')
const store = require('../services/sercvices')
const { Router } = express

const routerProducts = Router()
routerProducts.use(express.json())
routerProducts.use(express.urlencoded({extended: true}))

routerProducts.get('/:id?', (req, res) =>{
    const id = req.params.id || null
    let results = store.getProduct(id) || {}
     return res.send(results)
})

routerProducts.post('/', (req, res) =>{
    const product = req.body
    store.addProduct(product)
    
     return res.send(product)
})

module.exports = routerProducts