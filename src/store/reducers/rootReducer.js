import {combineReducers} from 'redux'
import adminReducer from './adminReducers';
import authReducer from './authReducers';
import dashboardReducer from './dashboardReducers';
import fundReducer from './fundReducers';
import userReducer from './userReducers';
import withdrawReducer from './withdrawalReducers';


const rootReducer = combineReducers({
    auth: authReducer,
    fund: fundReducer,
    dashboard: dashboardReducer,
    admin:  adminReducer,
    user: userReducer,
    withdraw: withdrawReducer
})

export default rootReducer;