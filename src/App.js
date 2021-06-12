import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './pages/login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <div className="content">
          <Switch>
            <Route  exact path="/" component={Login}  />
            <Route  exact path="/dashboard" component={Dashboard}  />           
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;