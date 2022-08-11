const express = require('express')
const sequelize = require('./db/connectdb')
const Product = require('./models/product')
const app = express()
const port = 3000
const dotenv = require("dotenv")
dotenv.config()
app.use(express.json())

app.post('/postdata', async (req, res) => {
    try {
        console.log(req.body);
        const postData = await Product.create({
            title: req.body.title,
            desc: req.body.desc,
            price: req.body.price,
            imageurl: req.body.imageurl
        });
        console.log(postData);
        res.json("added")
    } catch (error) {
        console.log(error);
    }

})

app.get('/', async (req, res) => {
    try {
        const postData = await Product.findAll({});
        console.log(postData);
        res.json(postData)
    } catch (error) {
        console.log(error);
    }
})

app.get('/getbyid', async (req, res) => {
    try {
        console.log(req.query.id);
        const postData = await Product.findByPk(req.query.id);
        console.log(postData);
        res.json(postData)
    } catch (error) {
        console.log(error);
    }
})

app.put('/updatebyid', async (req, res) => {
    try {
        console.log(req.body.id);
        const postData = await Product.findByPk(req.body.id).then((product) => {
            product.title = req.body.title,
                product.desc = req.body.desc,
                product.price = req.body.price,
                product.imageurl = req.body.imageurl
            return product.destroy()
        })
        console.log(postData);
        res.json(postData)
    } catch (error) {
        console.log(error);
    }
})

app.delete('/deletebyid/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const postData = await Product.findByPk(req.params.id).then(product => { return product.destroy() }
        )
        console.log(postData);
        res.json(postData)
    } catch (error) {
        console.log(error);
    }
})

sequelize.sync().then((result) => {
    console.log("result");
}).catch(err => {
    console.log("err")
})

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))