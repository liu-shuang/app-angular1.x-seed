'use strict';

const Koa = require('koa');
const router = require('./router');
const app = new Koa();


app.use(router.routes(), router.allowedMethods());

const port = 3003;
const server = app.listen(port, function() {
    console.log('Koa is listening to http://localhost:3003');
});

module.exports = app;
