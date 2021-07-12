/**
 * TIPOS DE PARAMETROS:
 * 
 * Query Params:
 *  Parametros nomeados enviados na rota após "?" (Filtros, paginação) 
 *  Exemplo: localhost:3333/users?name=Matheus
 *  Como acessar: req.query
 * 
 * Route Params: 
 *  Parametros utilizados para identificar recursos localhost:3333/users/:id
 *  Exemplo: localhost:3333/users?name=Matheus
 *  Como acessar: req.params
 * 
 * Request Body: 
 *  Corpo da requisição utilizado para criar ou alterar recursos
 *  Exemplo: localhost:3333/users
 *  Como acessar: req.body
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() // Com o KNEX.js
 * 
 * Usando SQLite
 */

const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get( '/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;