import {combineReducers} from 'redux'
import authReducer from './authReducers';
import fundReducer from './fundReducers';


const rootReducer = combineReducers({
    auth: authReducer,
    fund: fundReducer
})

export default rootReducer;