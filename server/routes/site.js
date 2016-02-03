"use strict";
var router = require('koa-router');

var siteRouter = router();

siteRouter.get('/', function *(){
    yield this.render("index")
});

siteRouter.get('/summoner/:summonerName', function *() {
    yield this.render("summoner")
});

module.exports = siteRouter;