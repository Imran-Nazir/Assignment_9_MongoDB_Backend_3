const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
//const jsonWebToken = require('json-web-token');
const mysql = require('mysql');
const mongoose = require('mongoose');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
//const validator = require('validator');


const app = new express();
const router = require("./src/Routes/api");

app.use(cors());
app.use(mongoSanitize());
app.use(hpp());
app.use(helmet());

const limiter = rateLimit({
    windowMs : 15*60*1000,
    max: 100
})
app.use(limiter);


app.use("/api", router);
app.use((req, res)=>{
    res.status(404).json({status:"error", data:"Not Found!"});
});

module.exports = app;