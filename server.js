const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());
// Iniciando o DB
const uri = "mongodb+srv://gustavo:123@cluster0-dppqo.mongodb.net/db?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });

app.listen(3001);
