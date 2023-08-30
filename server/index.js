const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer');
const parser = require('body-parser')
const bcrypt = require('bcrypt')
const cookieParser = require("cookie-parser")// cookies
const jwt = require('jsonwebtoken')
require('./db')
const { user } = require('./mongoSchema')
var cors = require('cors')  // api json 
require('dotenv').config();
var app = express()
// read secret key




// pour toutes les cors
// app.use(cors())

app.use(cookieParser())
const port = 3001
// Define dossier public
//const publicDirectory = path.join(__dirname, './public')
//app.use(express.static(publicDirectory))
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())

 app.use(cors((req, res, next) => {
res.set('Access-Control-Allow-Origin', '*');
  next();
 }));

 // Define routes
//  app.use('/' , require('./routes/pages'))
 app.use('/auth' , require('./routes/auth'))
 app.use('/api' , require('./routes/api'))
 app.use('/user' , require('./routes/user'))
 app.use('/utilisateurs' , require('./routes/utilisateurs'))
 app.use('/USER' , require('./routes/_user'))
 app.use('/OUVRIER' , require('./routes/ouvrier'))
 app.use('/PRODUIT' , require('./routes/produit'))
 app.use('/FOURNISSEUR' , require('./routes/fournisseur'))
 app.use('/UPLOAD-IMAGE' , require('./routes/upload-image'))
 app.use('/images' , express.static("uploads"))

 app.use((err,req,res,next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "something went wrong"
  return res.status(errorStatus).json({
    succes:false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
 })

 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
