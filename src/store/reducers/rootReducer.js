import {combineReducers} from 'redux'
import authReducer from './authReducers';
import dashboardReducer from './dashboardReducers';
import fundReducer from './fundReducers';


const rootReducer = combineReducers({
    auth: authReducer,
    fund: fundReducer,
    dashboard: dashboardReducer
})

export default rootReducer;