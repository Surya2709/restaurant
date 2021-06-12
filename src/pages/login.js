import React from 'react';
import './login.css';

function Login(){

    return(
        <div class="login_form">
            <div class="details">
                <div class="welcome">Welcome</div>
                    <form action="/" method="post">
                        <div class="wrap">
                            <label>Email</label>
                            <input type="text" class="input"/>
                            </div>
                        <div class="wrap">
                            <label>Password</label>
                            <input type="password" class="input" data-type="password"/>
                            </div>
                        <div class="wrap">
                            <label>Forgot password?</label>
                            </div>
                    <button type="submit" class="button"><h1 class="sign">Sign in!</h1></button>
                    </form>
            </div>


        <div class="details-two">
            <img src="" />
        <h1 class="back">Welcome back!</h1>
            <p class="log">Log in and use the opportunities offered by our portal.</p>
            <h2 class="acc">  let's rule the empire  </h2>
           
        </div>
        
        </div>
    

    );
}

export default Login;