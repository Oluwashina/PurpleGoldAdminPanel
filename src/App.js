import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './pages/Login/login';
import Dashboard from './pages/Dashboard/dashboard'

function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
