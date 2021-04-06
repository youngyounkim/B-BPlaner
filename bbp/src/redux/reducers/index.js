import { combineReducers } from 'redux' ;
import targetReducer from './targetReducer'


const rootReducer = combineReducers({
    target : targetReducer //<-- 명시적으로 키 값을 지정하였습니다.
}) ; 

export default rootReducer;