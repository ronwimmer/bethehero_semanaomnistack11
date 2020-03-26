const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// quando em desenvolvimento, deixa-se o cors() sem parâmetro
app.use(cors());
// quando for disponibilizar para uso em produção, pode-se colocar parâmetros para restringir o acesso a esse back-end
//app.use(cors({
//  origin: 'http://meuapp.com'
//}))

app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso = é esse '/' do app.get... fica, no navegador, como localhost:3333/users
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 * Navegador só usa o método GET
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o símbolo "?" (Filtros, paginação, etc) (parâmetros separados entre si por "&")
 * Route Params: Parâmetros utilizados para identificar recursos na rota (rota, seguido de "/:id")
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Uso do banco de dados (através de):
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() - funciona com quase qualquer SQL, dependendo do Query Builder escolhido
 * 
 * Vamos usar o Query Builder 'Knex.js'
 */

app.listen(3333);
