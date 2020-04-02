const http = require('http');
const app=require('./configureExpress');

const server = http.createServer(app);

module.exports=server;
