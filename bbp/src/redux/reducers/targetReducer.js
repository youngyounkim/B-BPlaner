import dummy from "../dummy.json"
import { ADD_TARGET, ADD_ACTIVITY, CHANGE_TARGET_COLOR } from "../actions/actions"


const targetReducer = (state = dummy ,action) => {

    switch ( action.type ) {
        case ADD_TARGET :
            return Object.assign({}, state, {
                targetCnt: state.targetCnt + 1,
                target: [...state.target, action.payload]
            });
        case ADD_ACTIVITY :
            let obj = {...state, target : [...state.target.map((el)=>{
                if(el.id === action.payload.id){
                    el.activities = [...el.activities, { id : el.activitiesCnt, name : action.payload.name}]
                    el.activitiesCnt++
                    return el;
                }
                return el;
            })]}
            return obj
        case CHANGE_TARGET_COLOR :
            let idx = state.target.findIndex(el => el.id === action.payload.id)
            let copiedTargets = state.target.slice(0);
            copiedTargets[idx].color =  action.payload.color;
            return Object.assign({}, state, {
                target: copiedTargets
            });
                break;
        default:
            return state
    }
}

export default targetReducer