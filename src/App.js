import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
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


class App extends Component {
  state = {  }
  render() { 
    if (isMobile) {
      return <div className="middleDiv">Mobile view not supported!</div>
     }
    return ( 
      <BrowserRouter>
         <Switch>
             <Route exact path="/" component={Login} />
             <Route  path="/forgotpassword" component={ForgotPassword} />
             <Route path="/dashboard" component={Dashboard} />
             <Route exact path="/withdrawal" component={Withdrawal} />
             <Route path="/withdrawal/processing" component={Processing} />
             <Route path="/withdrawal/paid" component={Paid} />
             <Route path="/withdrawal/declined" component={Declined} />
             <Route exact path="/fund" component={Fund} />
             <Route path="/fund/confirm" component={FundConfirm} />
             <Route path="/fund/all" component={FundingAll} />
             <Route exact path="/admin" component={Admin} />
             <Route path="/admin/all" component={AllAdmin} />
             <Route path="/admin/suspended" component={SuspendedAdmin} />
             <Route path="/admin/activities" component={AdminActivities} />
             <Route path="/admin/profile" component={AdminProfile} />
             <Route exact path="/users" component={Users} />
             <Route path="/users/:id" component={UsersDetails} />
             <Route path="/marketers" component={Marketers} />
             <Route path="/payouts/all" component={Payouts} />
             <Route path="*" component={NotFoundPage} />
           </Switch>
       </BrowserRouter>
     );
  }
}
 
export default App;
