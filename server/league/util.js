"use strict";
var _ = require('lodash');
var rp = require('request-promise');
var config = require('konfig')();

var REGION_MAP = {
    'br': 'BR1',
    'eune': 'EUN1',
    'euw': 'EUW1',
    'kr' : 'KR1',
    'lan': 'LA1',
    'las': 'LA2',
    'na': 'NA1',
    'oce': 'OC1',
    'tr': 'TR1',
    'ru': 'RU'
};

var DOMAIN = 'https://${region}.api.pvp.net';
var STATIC_DOMAIN = 'https://global.api.pvp.net';

module.exports = {
    getPlatformId: function(region) {
        return REGION_MAP[region];
    },

    get: function(uri, customQs) {
        var qs = {
            api_key: config.app.riotKey
        };

        if (customQs) {
            qs = _.assign({}, qs, customQs);
        }

        var request = {
            uri: uri,
            json: true,
            qs: qs
        };
        return rp.get(request);
    },

    buildStaticApiUrl: function(templatedUri, data) {
        return _.template(STATIC_DOMAIN + templatedUri)(data);
    },

    buildApiUrl: function(templatedUri, data) {
        return _.template(DOMAIN + templatedUri)(data);
    },

    standardizeSummonerName: function(summonerName) {
        return summonerName.toLowerCase().replace(" ", "");
    }
};