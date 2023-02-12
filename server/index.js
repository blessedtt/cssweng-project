const express = require('express');
const app = express();

//create database client
const {PrismaClient} = require('@prisma/client');
if (!global.prisma) {
  console.log("Creating new client.");
  global.prisma = new PrismaClient()
}

//view engine //TODO: change to appropriate view engine
app.engine('html', require('ejs').renderFile)

//static assets
app.set('views', 'public');
app.use('/public', express.static((process.env.PWD || __dirname) + '/public'));

//session handling module
const {handleSession} = require('./modules/uauth/session');
app.use(handleSession)

//run server
const PORT_NO = process.env.PORT || 3001
app.listen(PORT_NO, () => {
    console.log("running on port " + PORT_NO);
});

//routing module
const routes = require('./route.js');
app.use('/', routes);