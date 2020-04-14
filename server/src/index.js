require('./dbs/dbMongo/mongoose');
const server=require('./boot/configureHTTPServer');
const controller = require('./socketInit');

controller.createConnection(server);

//run
const PORT = process.env.PORT || 9632;

server.listen(PORT);
