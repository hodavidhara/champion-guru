import * as _ from "lodash";
import * as fetch from "isomorphic-fetch";
import * as qs from "qs";
import * as konfig from "konfig";
const config = konfig();

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

export const getPlatformId = function(region) {
  return REGION_MAP[region];
};

export const getLeagueResource = function(uri: string, customQs?: any): Promise<any> {
  var query: {} = {
    api_key: config.app.riotKey
  };

  if (customQs) {
    query = _.assign({}, query, customQs);
  }

  var fullUri = uri + '?' + qs.stringify(query);
  return fetch(fullUri).then(response => response.json());
};

export const buildStaticApiUrl = function(templatedUri: string, data: {}): string {
  return _.template(STATIC_DOMAIN + templatedUri)(data);
};

export const buildApiUrl = function(templatedUri: string, data: {}): string {
  return _.template(DOMAIN + templatedUri)(data);
};

export const standardizeSummonerName = function(summonerName: string): string {
  return summonerName.toLowerCase().replace(" ", "");
};