const express = require('express');
const app = express();

const {dbConnection} = require('./config/mongo.config')
const cors = require('cors');

const PORT = process.env.PORT

app.use(express.json());
app.use(cors());

app.use('/api/hotel', require('./routes/hotel.router'));

dbConnection();

app.listen(PORT, () =>{
    console.log(`servidor corriendo en http://localhost:${PORT}`)
});


