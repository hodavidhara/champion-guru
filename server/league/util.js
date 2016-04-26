"use strict";
var _ = require('lodash');
var fetch = require('isomorphic-fetch');
var qs = require('qs');
var config = require('konfig')();

var REGION_MAP = {
  'br': 'BR1',
  'eune': 'EUN1',
  'euw': 'EUW1',
  'kr': 'KR1',
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
    var query = {
      api_key: config.app.riotKey
    };

    if (customQs) {
      query = _.assign({}, query, customQs);
    }
    
    var fullUri = uri + '?' + qs.stringify(query);
    return fetch(fullUri).then(response => response.json());
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