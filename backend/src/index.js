const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 *  Entedemos Rotas e Recursos
 */

 /**
 *  Métodos Get do http
 * 
 * GET: Buscar/listar um inforação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação
 * DELETE: Deletar uma informação
 */

 /**
 *  Tipos de parâmetros
 * 
 * Query: Parâmetros nomeados enviados na rota "?" Filtros
 * Route Params: Utilizados para identificar resursos
 * Request Body: Corpor da requisição, utilizado para criar 
 */

 /**
  * SQL: MySQL, SQLite, PostGreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  * 
  */ 

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*')
   */
   
app.listen(3333);