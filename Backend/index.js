require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require("./models/");

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


db.sequelize.sync().then(() => {
    console.log("db sincronizada");
});

app.use('/api', routes);


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})