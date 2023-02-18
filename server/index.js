const express = require('express');
const app = express();

//create database client
const {PrismaClient} = require('@prisma/client');
if (!global.prisma) {
  console.log("Creating new client.");
  global.prisma = new PrismaClient()
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//view engine //TODO: change to appropriate view engine
app.engine('html', require('ejs').renderFile)

//static assets
app.set('views', 'views');
app.use('/public', express.static((process.env.PWD || __dirname) + '/public'));

//proxy to allow access to scripts to localhost:3000 (frontend react server)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//run server
const PORT_NO = process.env.PORT || 3001
app.listen(PORT_NO, () => {
    console.log("running on port " + PORT_NO);
});

//routing module
const routes = require('./routes/mainRoute.js');
app.use('/', routes);