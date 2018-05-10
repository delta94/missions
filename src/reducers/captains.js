import { handleActions } from 'redux-actions';
import { updateStatusFulfilled } from '../actions';

const defaultState = {};

export default handleActions(
  {
    [updateStatusFulfilled]: (state, { payload }) => {
      let nextState = {};
      let captains = payload.captains || [];
      captains.forEach(captain => {
        // console.log(provider);
        nextState[captain.id] = captain;
      });
      return nextState;
    }
  },
  defaultState,
);

export const getCaptainsArray = state =>
  Object.entries(state).map(([, captain]) => captain);

export const getCaptainOnMission = state =>
  state.mission.captain_id ? state.captains[state.mission.captain_id] : undefined;
