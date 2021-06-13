import React, {useState} from 'react';
import './login.css';
import kitchen from '../kitchen.gif';
import axios from 'axios';
import { setUserSession } from './Common';



const Login = (props) =>{

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const [error,setError] = useState(null);
const [loading,setLoading] = useState(false);


const handleLogin =() => {

    setError(null);
    setLoading(true);

    axios.post('http://localhost:4000/users/signin',{
        username: username,
        password : password
    }).then(response=>{
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push('/dashboard');
      
    }).catch(error=>{
        setLoading(false);
        if(error.response.status === 401 ||error.response.status === 400){
            setError(error.response.data.message);
        }
        else{
            setError("something went wrong , pls try again.")
        }
    })

    //props.history.push('/dashboard')
}

    return(
        <div class="login_form">
            <div class="details">
                <div class="welcome">Welcome</div>
                    <form >
                        <div class="wrap">
                            <label>Username</label>
                            <input type="text" class="input" value={username} onChange={ e => setUsername(e.target.value)}/>
                            </div>
                        <div class="wrap">
                            <label>Password</label>
                            <input type="password" class="input" data-type="password" value={password} onChange={ e => setPassword(e.target.value)}/>
                            </div>
                            
                        <div class="wrap">
                            <label>Forgot password?</label>
                            </div>
                        <div class="wrap">
                                {error && <div className="error">{error}</div>}
                            </div>
                           
                    <input type="button" value={loading ? "Loading.." : "Login"} disabled = {loading} onClick={handleLogin} class="button" value="Signin"/>
                    </form>
            </div>

        <div class="details-two">
            <img class='kitchen-logo' src={kitchen} />
        <h1 class="back">Hey Welcome Again!</h1>
            <p class="log">  Build by Growmore Corps, India </p>
            <h1 class="acc">Log in into your system</h1>
        </div>
    </div>
    

    );
}

export default Login;