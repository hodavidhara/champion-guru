import _ from "lodash";
import SummonerService from "./summoner";
import StaticService from "./static";
import { getLeagueResource, buildApiUrl, standardizeSummonerName, getPlatformId } from "./util";

var ChampionMasteryService = function() {
};

ChampionMasteryService.prototype.getAllForSummoner = function(region, summonerName) {
  let standardizedSummonerName = standardizeSummonerName(summonerName);

  return Promise.all([
    SummonerService.byName(region, standardizedSummonerName),
    StaticService.allChampions(region)
  ]).then(function(results) {
    var summonerResponse = results[0];
    var championResponse = results[1];

    var summoner = summonerResponse[standardizedSummonerName];

    return getLeagueResource(buildApiUrl('/championmastery/location/${platformId}/player/${summonerId}/champions', {
      region: region,
      summonerId: summoner.id,
      platformId: getPlatformId(region)
    })).then(function(masteryResponse) {
      return _.map(masteryResponse, function(mastery: any) {
        return Object.assign({}, mastery, {
          champion: championResponse[mastery.championId]
        });
      })
    });
  });
};

var service = new ChampionMasteryService();

export default service;