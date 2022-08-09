const express = require('express')
const connectdb = require('./db/connectdb')
const app = express()
const port = 3000

app.use(express.json())

app.post('/', (req, res) => {
    const keyword = req.body
    connectdb.query(`INSERT INTO testdb.product(title,price,desc,imageURL) value(${keyword.title}, ${keyword.price}, ${keyword.desc}, ${keyword.imageURL})`, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
            res.json(rows)
        }
    })
})

app.get('/', (req, res) => {
    connectdb.query("SELECT * FROM testdb.product", (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
            res.json(rows)
        }
    })
})
app.get('/getbyid/:id', (req, res) => {
    connectdb.query("SELECT * FROM testdb.product WHERE id=?", [req.params.id], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
            res.json(rows)
        }
    })
})

app.delete('/deletebyid/:id', (req, res) => {
    connectdb.query("DELETE FROM testdb.product WHERE id=?", [req.params.id], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
            res.json(rows)
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))