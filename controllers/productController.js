const db = require ('../models')

// Create the main model
const Product = db.products

const Review = db.reviews

// Main work

// 1. Create product

const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }
    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
}

// 2. Get all products

const getAllProducts = async (req, res) => {

    let products = await Product.findAll({})

    res.status(200).send(products)
}



// 3. Get single product

const getOneProduct = async (req, res) => {

    let id = req.params.id
    let product = await Product.findOne({where: { id: id }})

    res.status(200).send(product)
}


// 4. Update Product

const updateProduct = async (req, res) => {

    let id = req.params.id
    const product = await Product.update(req.body, { where: { id: id}})

    res.status(200).send(product)
   
}


// 5. Delete product by id

const deleteProduct = async (req, res) => {
    
    let id = req.params.id

    await Product.destroy({where: { id: id }} )

    res.status(200).send('Product is deleted')
}

// Get published product

const getPublishedProduct = async (req, res) => {

    const products = await Product.findAll({ where: { published: true}})

    res.status(200).send(products)
}

module.exports = {

    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}