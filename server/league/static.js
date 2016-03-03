"use strict";
var leagueUtil = require('./util');

var StaticService = function () {
};

StaticService.prototype.allChampions = function (region) {
    return leagueUtil.get(leagueUtil.buildApiUrl('/api/lol/static-data/${region}/v1.2/champion', {
        region: region
    }), {
        dataById: true,
        champData: 'image'
    }).then(function (response) {
        return response.data;
    });
};

var service = new StaticService();

module.exports = service;