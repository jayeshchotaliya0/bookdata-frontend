import React  from 'react';
import './App.css';
import Login from "../src/component/Login";
import Register from './component/Register';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <> 
    {/* <Login /> */}
    <Router>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
    </Switch>
  </Router>

    </>

  );
}

export default App;
