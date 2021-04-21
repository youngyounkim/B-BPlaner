import dummy from "../dummy.json"
import { ADD_TARGET, ADD_ACTIVITY, CHANGE_TARGET_COLOR } from "../actions/actions"
import { ADD_TARGET, ADD_ACTIVITY, DELETE_ACTIVITY } from "../actions/actions"


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

        case DELETE_ACTIVITY : 
            return {...state, target : [...state.target.map((el)=>{
                if(el.id === action.payload.targetId){
                    el.activities = el.activities.filter((el)=>{
                        if(el.id === action.payload.id){
                            return false
                        } else {
                            return true;
                        }
                    })
                    return el;
                } 
                return el;
            })]}

        case CHANGE_TARGET_COLOR :
            let idx = state.target.findIndex(el => el.id === action.payload.id)
            let copiedTargets = state.target.slice(0);
            copiedTargets[idx].color =  action.payload.color;
            return Object.assign({}, state, {
                target: copiedTargets
            });
        default:
            return state
    }
}

export default targetReducer