const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Driver: SELECT * FROM users
Query Builder: table('users').select('*').where() => KNEX.JS
*/
/*Inicializando DB
npx knex init
*/

/* Criando migrates
Após configurar caminho das migrates no knexfile:
npx knex migrate:make migrateName
*/

/* Rodando migrates
npx knex migrate:latest
*/



app.listen(3333);