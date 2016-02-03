"use strict";
var SummonerService = require('./summoner');
var leagueUtil = require('./util');

var ChampionMasteryService = function () {
};

ChampionMasteryService.prototype.getAllForSummoner = function (region, summonerName) {
    return SummonerService.byName(region, summonerName).then(function(response) {
        var summoner = response[summonerName];
        return leagueUtil.get(leagueUtil.buildApiUrl('/championmastery/location/${platformId}/player/${summonerId}/champions', {
            region: region,
            summonerId: summoner.id,
            platformId: leagueUtil.getPlatformId(region)
        }));
    })
};

var service = new ChampionMasteryService();

module.exports = service;