const express = require('express')
const cors = require ('cors')
const app = express()


const corOptions = {
    origin: 'https://localhost:3000'
}



// Middlewares:

app.use(cors(corOptions))
app.use(express.json())
app.use (express.urlencoded({ extended: true}))



// routers

const router = require ('./routes/productRouter.js')
app.use ('/api/products', router)


// Testing the API:

app.get('/', (req, res) => {
    res.json({message: 'hello world'})
} )

// Port

const PORT = process.env.PORT || 3000

// Server

app.listen (PORT , () => {
    console.log(`server is running on port ${PORT}`)
})

