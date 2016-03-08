"use strict";
var _ = require('lodash');
var SummonerService = require('./summoner');
var StaticService = require('./static');
var leagueUtil = require('./util');

var ChampionMasteryService = function() {
};

ChampionMasteryService.prototype.getAllForSummoner = function(region, summonerName) {
  let standardizedSummonerName = leagueUtil.standardizeSummonerName(summonerName);

  return Promise.all([
    SummonerService.byName(region, standardizedSummonerName),
    StaticService.allChampions(region)
  ]).then(function(results) {
    var summonerResponse = results[0];
    var championResponse = results[1];

    var summoner = summonerResponse[standardizedSummonerName];

    return leagueUtil.get(leagueUtil.buildApiUrl('/championmastery/location/${platformId}/player/${summonerId}/champions', {
      region: region,
      summonerId: summoner.id,
      platformId: leagueUtil.getPlatformId(region)
    })).then(function(masteryResponse) {
      return _.map(masteryResponse, function(mastery) {
        return Object.assign({}, mastery, {
          champion : championResponse[mastery.championId]
        });
      })
    });
  });
};

var service = new ChampionMasteryService();

module.exports = service;