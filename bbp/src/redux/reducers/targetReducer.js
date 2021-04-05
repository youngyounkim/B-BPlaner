import dummy from "../dummy.json"
import { ADD_TARGET } from "../actions/actions"


let dummy2 =JSON.parse(dummy)

const targetReducer = (state = dummy2 ,action) => {

    switch ( action.type ) {
        case ADD_TARGET :
            return state;
        default:
            return state
    }
}

export default targetReducer