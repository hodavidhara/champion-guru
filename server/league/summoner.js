"use strict";
var leagueUtil = require('./util');

var SummonerService = function () {
};

SummonerService.prototype.byName = function (region, summonerName) {
    return leagueUtil.get(leagueUtil.buildApiUrl('/api/lol/${region}/v1.4/summoner/by-name/${summonerName}', {
        region: region, summonerName: summonerName
    }));
};

var service = new SummonerService();

module.exports = service;