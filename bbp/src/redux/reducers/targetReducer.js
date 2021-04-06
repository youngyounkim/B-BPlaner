import dummy from "../dummy.json"
import { ADD_TARGET } from "../actions/actions"


const targetReducer = (state = dummy ,action) => {

    switch ( action.type ) {
        case ADD_TARGET :
            state.stargetCnt++ 
            return Object.assign({}, state, {
                target: [...state.target, action.payload]
            });
        default:
            return state
    }
}

export default targetReducer