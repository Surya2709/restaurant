import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import PublicRoute from './pages/PublicRoutes';
import PrivateRoute from './pages/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <div className="content">
          <Switch>
            <PublicRoute  exact path="/" component={Login}  />       
            <PrivateRoute  exact path="/dashboard" component={Dashboard}  />           
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;