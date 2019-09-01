const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./db/database');

// settings
app.set('port',process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

// routes
app.use('/api/employees',require('./routes/employees'))

// starting the server

app.listen(app.get('port'),()=>{
    console.log(`server listening in PORT ${app.get('port')}`);
});