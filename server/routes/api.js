"use strict";
var router = require('koa-router');
var SummonerService = require('../league/summoner');
var ChampionMasteryService = require('../league/champion-mastery');

var apiRouter = router({
    'prefix': "/api"
});

apiRouter.get('/championmastery/:region/:summonerName', function *(){
    var championMasteries = yield ChampionMasteryService.getAllForSummoner(this.params.region, this.params.summonerName);
    this.body = championMasteries;
});

apiRouter.get('/summoner/:region/:summonerName', function *(){
    var summoner = yield SummonerService.byName(this.params.region, this.params.summonerName);
    this.body = summoner;
});

module.exports = apiRouter;