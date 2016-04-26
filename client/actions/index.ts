import fetch from "isomorphic-fetch";
import moment from "moment";

function requestChampionMasteries(region, summonerName) {
    return {
        type: "REQUEST_CHAMPION_MASTERIES",
        region,
        summonerName
    }
}

function receiveChampionMasteries(region, summonerName, masteries) {
    return {
        type: "RECEIVE_CHAMPION_MASTERIES",
        region,
        summonerName,
        masteries,
        receivedAt: moment()
    }
}

export const fetchChampionMasteries = (region, summonerName) => {

    return (dispatch) => {
        dispatch(requestChampionMasteries(region, summonerName));

        return fetch(encodeURI('/api/championmastery/' + region + '/' + summonerName))
            .then(response => response.json())
            .then(json => dispatch(receiveChampionMasteries(region, summonerName, json)));
    }
};

const shouldFetch = (state, region, summonerName) => {
    const regionMasteries = state.championMasteries[region];
    if (!regionMasteries) {
        return true;
    }
    const summonerMasteries = regionMasteries[summonerName];
    if (!summonerMasteries) {
        return true;
    } else if (summonerMasteries.fetching) {
        return false;
    }
    return !summonerMasteries.masteries;
};

export const fetchChampionMasteriesIfNeeded = (region, summonerName) => {
    return (dispatch, getState) => {
        if (shouldFetch(getState(), region, summonerName)) {
            return dispatch(fetchChampionMasteries(region, summonerName))
        }
    }
};