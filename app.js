const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({origin: 'http://localhost:8080'}));
require('./routes/todo.route')(app);

const port = 4000;

app.listen(port, () => {
    console.log(`server on on port ${port}`)
});


mongoose.connect('mongodb://arnacologie1:arnacologie1@ds251804.mlab.com:51804/arnacobase',  { useNewUrlParser: true } , (err) => {
    if(err){
        console.log(('database not connected'));
    }
    else{
        console.log('database connected');
    }
});