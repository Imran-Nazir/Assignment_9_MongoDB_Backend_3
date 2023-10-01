const app = require('./App.js');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const port = process.env.RUNNING_PORT || 8081;
app.listen(port, ()=>{
    console.log('Server successfully running')
});