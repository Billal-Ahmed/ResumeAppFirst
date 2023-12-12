// const express = require("express")
import express from 'express'
const app = express()
const port = process.env.PORT || '3000';
import router from './routes/web.js';

// Set Template engine
app.set('view engine','ejs')

// Static Files
app.use(express.static('public'));

// Load Routes
app.use('/',router);


app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
})