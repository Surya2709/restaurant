import { func } from "prop-types";
import React, {userState }  from "react";
import "./App.css";

function login(){
    return(
        <div className= "App">
            <div className="registration">
                <h1>Registration</h1>
                <label>Username</label>
                <input type="text"/>
                <label>Password</label>
                <input type="text"/>
                <button> Register</button>
            </div>
            <div className="login">
                <h1>Registration</h1>
                <input type="text" placeholder="Username..."/>
                <input type="password" placeholder="Password..."/>
                <button>Register</button>
            </div>
        </div>
    );
}
export  default login;