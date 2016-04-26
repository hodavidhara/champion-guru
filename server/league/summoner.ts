import { getLeagueResource, buildApiUrl } from "./util";

var SummonerService = function() {
};

SummonerService.prototype.byName = function(region, summonerName) {
  return getLeagueResource(buildApiUrl('/api/lol/${region}/v1.4/summoner/by-name/${summonerName}', {
    region: region, summonerName: summonerName
  }));
};

var service = new SummonerService();

export default service;