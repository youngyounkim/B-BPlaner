import dummy from "../dummy.json"
import { ADD_TARGET } from "../actions/actions"


// let dummy2 =JSON.parse(dummy) 이거 JSON.parse 안해야 프로그램 돌아가더군요. "제천"

const targetReducer = (state = dummy ,action) => {

    switch ( action.type ) {
        case ADD_TARGET :
            state.targetCnt++;
            return Object.assign({}, state, {
                target: [...state.target, action.payload]
            });
        default:
            return state
    }
}

export default targetReducer