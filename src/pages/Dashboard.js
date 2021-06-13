import React from 'react';
import { getUser, removeUserSession } from './Common';

const Dashboard =(props) => {


const user = getUser();

const handleLogout = () => {
  removeUserSession();
  props.history.push('/')

}


  return (
    <div>
      welcome to {user.name}!
    

    <input  type='button' value="LogOut" onClick={handleLogout}   />
    </div>
  );
}

export default Dashboard;