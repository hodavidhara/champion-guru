"use strict";
var SummonerService = require('./summoner');
var leagueUtil = require('./util');

var ChampionMasteryService = function () {
};

ChampionMasteryService.prototype.getAllForSummoner = function (region, summonerName) {
    let standardizedSummonerName = leagueUtil.standardizeSummonerName(summonerName);
    return SummonerService.byName(region, standardizedSummonerName).then(function(response) {
        var summoner = response[standardizedSummonerName];
        return leagueUtil.get(leagueUtil.buildApiUrl('/championmastery/location/${platformId}/player/${summonerId}/champions', {
            region: region,
            summonerId: summoner.id,
            platformId: leagueUtil.getPlatformId(region)
        }));
    })
};

var service = new ChampionMasteryService();

module.exports = service;