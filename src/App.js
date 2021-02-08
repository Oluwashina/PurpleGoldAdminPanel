import React from 'react';
import {BrowserRouter, Switch, Route,} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoutes/protectedRoute'

import Login from './pages/Login/login';
import ForgotPassword from './pages/Login/ForgotPassword';
import Dashboard from './pages/Dashboard/dashboard'
import Withdrawal from './pages/Withdrawal/withdrawal'
import Processing from './pages/Withdrawal/processing'
import Paid from './pages/Withdrawal/paid'
import Declined from './pages/Withdrawal/declined'
import Fund from './pages/Fund/fund'
import FundConfirm from './pages/Fund/fundConfirm'
import Admin from './pages/Admin/admin'
import AllAdmin from './pages/Admin/alladmin'
import SuspendedAdmin from './pages/Admin/suspendedAdmin'
import AdminActivities from './pages/Admin/AdminActivities'
import AdminProfile from './pages/Admin/AdminProfile'
import Users from  './pages/Users/users'
import UsersDetails from './pages/Users/usersbyId'
import Marketers from './pages/Marketers/marketers'
import FundingAll from './pages/Dashboard/FundingAll'
import Payouts from './pages/Dashboard/AllPayouts'
import NotFoundPage from './pages/404/NotFound';
import {isMobile} from 'react-device-detect'



const App = (props) => {

  
  if(isMobile){
    return <div className="middleDiv">Mobile view not supported!</div>
   }

  return ( 
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route  path="/forgotpassword" component={ForgotPassword} />
        <ProtectedRoute exact path="/withdrawal" component={Withdrawal} />
        <ProtectedRoute path="/withdrawal/processing" component={Processing} />
        <ProtectedRoute path="/withdrawal/paid" component={Paid} />
        <ProtectedRoute path="/withdrawal/declined" component={Declined} />
        <ProtectedRoute exact path="/fund" component={Fund} />
        <ProtectedRoute path="/fund/confirm" component={FundConfirm} />
        <ProtectedRoute path="/fund/all" component={FundingAll} />
        <ProtectedRoute exact path="/admin" component={Admin} />
        <ProtectedRoute path="/admin/all" component={AllAdmin} />
        <ProtectedRoute path="/admin/suspended" component={SuspendedAdmin} />
        <ProtectedRoute path="/admin/activities" component={AdminActivities} />
        <ProtectedRoute path="/admin/profile" component={AdminProfile} />
        <ProtectedRoute exact path="/users" component={Users} />
        <ProtectedRoute path="/users/:id" component={UsersDetails} />
        <ProtectedRoute path="/marketers" component={Marketers} />
        <ProtectedRoute path="/payouts/all" component={Payouts} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
  </BrowserRouter>
   );
}


 
export default App;


