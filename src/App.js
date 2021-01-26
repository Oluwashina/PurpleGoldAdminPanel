import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './pages/Login/login';
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
import Marketers from './pages/Marketers/marketers'


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <BrowserRouter>
         <Switch>
             <Route exact path="/" component={Login} />
             <Route path="/dashboard" component={Dashboard} />
             <Route exact path="/withdrawal" component={Withdrawal} />
             <Route path="/withdrawal/processing" component={Processing} />
             <Route path="/withdrawal/paid" component={Paid} />
             <Route path="/withdrawal/declined" component={Declined} />
             <Route exact path="/fund" component={Fund} />
             <Route path="/fund/confirm" component={FundConfirm} />
             <Route exact path="/admin" component={Admin} />
             <Route path="/admin/all" component={AllAdmin} />
             <Route path="/admin/suspended" component={SuspendedAdmin} />
             <Route path="/admin/activities" component={AdminActivities} />
             <Route path="/admin/profile" component={AdminProfile} />
             <Route path="/users" component={Users} />
             <Route path="/marketers" component={Marketers} />
           </Switch>
       </BrowserRouter>
     );
  }
}
 
export default App;
