import dummy from "../dummy.json"
import { ADD_TARGET } from "../actions/actions"


const targetReducer = (state = dummy ,action) => {

    switch ( action.type ) {
        case ADD_TARGET :
            return Object.assign({}, state, {
                target: [...state.target, action.payload],
                targetCnt: state.targetCnt + 1
            });
        default:
            return state
    }
}

export default targetReducer