require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./db/sequelize');
const userRoutes = require('./routes/user');
const path = require('path');



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

sequelize.initDb();

// Endpoints
require('./routes/findAllPost')(app)
require('./routes/findPostByPk')(app)
require('./routes/createPost')(app)
require('./routes/updatePost')(app)
require('./routes/deletePost')(app)

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);


module.exports = app;