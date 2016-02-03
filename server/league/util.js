"use strict";
var _ = require('lodash');
var rp = require('request-promise');

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

module.exports = {
    getPlatformId: function(region) {
        return REGION_MAP[region];
    },

    get: function(uri) {
        var request = {
            uri: uri,
            json: true,
            qs: {
                api_key: '28ea0cf2-96be-4c79-a55e-443deaad49c1'
            }
        };
        return rp.get(request);
    },

    buildApiUrl: function(templatedUri, data) {
        return _.template(DOMAIN + templatedUri)(data);

    }
};