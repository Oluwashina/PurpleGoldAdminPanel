import {combineReducers} from 'redux'
import adminReducer from './adminReducers';
import authReducer from './authReducers';
import dashboardReducer from './dashboardReducers';
import fundReducer from './fundReducers';


const rootReducer = combineReducers({
    auth: authReducer,
    fund: fundReducer,
    dashboard: dashboardReducer,
    admin:  adminReducer
})

export default rootReducer;