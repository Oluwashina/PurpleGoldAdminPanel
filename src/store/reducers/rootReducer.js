import {combineReducers} from 'redux'
import adminReducer from './adminReducers';
import authReducer from './authReducers';
import dashboardReducer from './dashboardReducers';
import fundReducer from './fundReducers';
import marketersReducer from './marketersReducers';
import userReducer from './userReducers';
import withdrawReducer from './withdrawalReducers';


const rootReducer = combineReducers({
    auth: authReducer,
    fund: fundReducer,
    dashboard: dashboardReducer,
    admin:  adminReducer,
    user: userReducer,
    withdraw: withdrawReducer,
    marketer: marketersReducer
})

export default rootReducer;