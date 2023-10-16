//modulos

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//routes
//midllewares

//config

const dbName = "partytime";
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//atrelando a primeira rota 

app.get("/", (req, res)=>{
        res.json({message: "Rota teste, será trocada"})
})

//executar ou entender a porta 3000

app.listen(port, ()=>{
    console.log(`O banckend esta rodando na porta ${port}`)
})



