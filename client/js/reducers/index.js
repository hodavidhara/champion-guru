export const championMasteries = (state = {}, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'REQUEST_CHAMPION_MASTERIES' :
            if (!newState[action.region]) {
                newState[action.region] = {}
            }
            newState[action.region][action.summonerName] = {
                fetching: true,
                masteries: []
            };
            return newState;
            break;
        case 'RECEIVE_CHAMPION_MASTERIES' :
            if (!newState[action.region]) {
                newState[action.region] = {};
            }
            newState[action.region][action.summonerName] = {
                fetching: false,
                masteries: action.masteries,
                receivedAt: action.receivedAt
            };
            return newState;
            break;
        default :
            return state;
    }
};