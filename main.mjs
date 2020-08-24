import express from 'express';
import routes from './routes/index.mjs';
const app = express();


//Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/', routes)

//Server
const port = 5000
app.listen(port);
console.log("Server running on port " + port + ";")