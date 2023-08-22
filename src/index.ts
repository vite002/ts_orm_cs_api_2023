import express from 'express';
import 'reflect-metadata';
import routes from './routes';
import './database/connect.ts';

const app = express();
app.use(express.json());

app.use(routes); // depois da definição do parser via json

app.use(function(req, res, next) {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 res.header('Access-Control-Allow-Methods', 'GET,POST');
 next();
});
app.listen(3000, () => console.log('Server started at http://localhost:3000'));