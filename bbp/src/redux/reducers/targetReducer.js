import dummy from "../dummy.json"
import { ADD_TARGET } from "../actions/actions"


const targetReducer = (state = dummy ,action) => {

    switch ( action.type ) {
        case ADD_TARGET :
            return state;
        default:
            return state
    }
}

export default targetReducer