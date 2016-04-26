import { getLeagueResource, buildApiUrl } from "./util";

var StaticService = function() {
};

StaticService.prototype.allChampions = function(region) {
  return getLeagueResource(buildApiUrl('/api/lol/static-data/${region}/v1.2/champion', {
    region: region
  }), {
    dataById: true,
    champData: 'image'
  }).then(function(response) {
    return response.data;
  });
};

var service = new StaticService();

export default service;