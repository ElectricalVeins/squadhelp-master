/*
 //express
 const express = require('express');
 const router = require('./router');
 const cors = require('cors');
 const handlerError = require('./middlewares/handlerError');
 const app = express();

 app.use(cors());
 app.use(express.json());
 app.use('/public', express.static('public'));
 app.use(router);
 app.use(handlerError);


 //http
 const http = require('http');
 const server = http.createServer(app);


 //socket
 const controller = require('./socketInit');
 controller.createConnection(server);
 */
require('./dbs/dbMongo/mongoose');
const server=require('./boot/configureHTTPServer');
const controller = require('./socketInit');

controller.createConnection(server);

//run
const PORT = process.env.PORT || 9632;
server.listen(PORT/*,
 () => console.log(`Example app listening on port ${ PORT }!`)*/);