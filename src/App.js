import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './pages/Login/login';
import Dashboard from './pages/Dashboard/dashboard'
import Withdrawal from './pages/Withdrawal/withdrawal'
import Fund from './pages/Fund/fund'

function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/withdrawal" component={Withdrawal} />
        <Route path="/fund" component={Fund} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
