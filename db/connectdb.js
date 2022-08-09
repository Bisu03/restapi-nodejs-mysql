// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: '****',
    user: '*****',
    password: "*****",
    database: '*****'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("db connected");
    }
})

module.exports = connection