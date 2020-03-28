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

app.listen(3333);
