"use strict";
var router = require('koa-router');
var SummonerService = require('../league/summoner');
var ChampionMasteryService = require('../league/champion-mastery');
var StaticService = require('../league/static');

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

apiRouter.get('/static/champion/:region', function *(){
    var champions = yield StaticService.allChampions(this.params.region);
    this.body = champions;
});

module.exports = apiRouter;