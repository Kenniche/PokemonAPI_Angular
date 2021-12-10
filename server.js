const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/name_of_your_DB', { useNewUrlParser: true });
const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));

app.listen(9090, () => console.log("listening on port 9090"));