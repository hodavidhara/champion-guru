import * as Router from "koa-router";
import SummonerService from "../league/summoner";
import ChampionMasteryService from "../league/champion-mastery";
import StaticService from "../league/static";

var apiRouter = new Router({
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

export default apiRouter;