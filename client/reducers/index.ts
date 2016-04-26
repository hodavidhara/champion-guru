import { assign } from "lodash";

interface Action {
  type: string;
  region: string;
  summonerName: string;
  masteries: {}[];
  receivedAt: any;
}

export const championMasteries = (state: any = {}, action: Action) => {
  let newState: any = assign({}, state);
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
    default :
      return state;
  }
};