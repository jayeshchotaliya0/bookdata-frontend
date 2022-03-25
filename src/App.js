import React  from 'react';
import './App.css';
import Login from "../src/component/Login";
import Register from './component/Register';
import Dashboard from './component/Dashboard';
import Listing from './component/Listing';
import Edit from './component/Edit';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
var token = window.sessionStorage.getItem("Token");

function App() {
  return (
    <> 
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' component={ token ? Dashboard : Login } />
        <Route exact path='/listing' component={ token ? Listing : Login } />
        <Route exact path='/edit/:id' component={ token ? Edit : Login } />
      </Switch>
    </Router>
    </>
  );
}

export default App;
