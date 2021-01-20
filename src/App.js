import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './pages/Login/login';
import Dashboard from './pages/Dashboard/dashboard'
import Withdrawal from './pages/Withdrawal/withdrawal'
import Fund from './pages/Fund/fund'
import FundConfirm from './pages/Fund/fundConfirm'
import Admin from './pages/Admin/admin'
import Users from  './pages/Users/users'

function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/withdrawal" component={Withdrawal} />
        <Route path="/fund" component={Fund} />
        <Route path="/confirm/fund" component={FundConfirm} />
        <Route path="/admin" component={Admin} />
        <Route path="/users" component={Users} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
