const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

//Users
app.use('/api/users', require('./controllers/userControllers'));

//Products
app.use('/api/products', require('./controllers/productControllers'));

//Product packages
app.use('/api/packages', require('./controllers/packageControllers'));

//Orders
app.use('/api/orders', require('./controllers/orderControllers'));

module.exports = app
