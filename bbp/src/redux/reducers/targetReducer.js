import dummy from "../dummy.json";
import {
  ADD_TARGET,
  ADD_ACTIVITY,
  CHANGE_TARGET_COLOR,
  DELETE_ACTIVITY,
  CHANGE_ACTIVITY_NAME,
  DELETE_TARGET,
} from "../actions/actions";

const targetReducer = (state = dummy, action) => {
  switch (action.type) {
    case ADD_TARGET:
      return Object.assign({}, state, {
        targetCnt: state.targetCnt + 1,
        target: [...state.target, action.payload],
      });

    case ADD_ACTIVITY:
      let obj = {
        ...state,
        target: [
          ...state.target.map((el) => {
            if (el.id === action.payload.id) {
              el.activities = [
                ...el.activities,
                { id: el.activitiesCnt, name: action.payload.name },
              ];
              el.activitiesCnt++;
              return el;
            }
            return el;
          }),
        ],
      };
      return obj;

    case DELETE_TARGET:
      console.log("targetCnt은 ", state.targetCnt);
      const nextState = state.target.filter(
        (el) => el.id !== action.payload.id
      );
      console.log("nextState는 ", nextState);
      return { ...state, target: nextState };

    case CHANGE_ACTIVITY_NAME:
      const { targetId, activityId, inputValue } = action.payload;
      return {
        ...state,
        target: state.target.map((target) => {
          if (target.id === targetId) {
            target.activities = target.activities.map((activity) => {
              if (activity.id === activityId) {
                activity = { ...activity, name: inputValue };
              }
              return activity;
            });
          }
          return target;
        }),
      };

    case DELETE_ACTIVITY:
      return {
        ...state,
        target: [
          ...state.target.map((el) => {
            if (el.id === action.payload.targetId) {
              el.activities = el.activities.filter((el) => {
                if (el.id === action.payload.id) {
                  return false;
                } else {
                  return true;
                }
              });
              return el;
            }
            return el;
          }),
        ],
      };

    case CHANGE_TARGET_COLOR:
      let idx = state.target.findIndex((el) => el.id === action.payload.id);
      let copiedTargets = state.target.slice(0);
      copiedTargets[idx].color = action.payload.color;
      return Object.assign({}, state, {
        target: copiedTargets,
      });
    default:
      return state;
  }
};

export default targetReducer;
