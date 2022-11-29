import React, {useState} from "react";
import './Register.css';
// import { redirect } from "react-router-dom";
// import Home from "./Home";
// import {BrowserRouter as Route} from "react-router-dom"
// import { Redirect, Route } from "react-router";
import Axios from 'axios';
function Register() {
    
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [loginStatus, setLoginStatus] = useState('');

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: usernameReg,
            password: passwordReg
        }).then((response)=> {
            console.log(response);
        });
    };

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password
        }).then((response)=> {
            if(response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username);
                // return <redirect to = "/Home" />;
                // return <Navigate to ="/Home" element={<Home />}/>
                // return <Route path="/Home" element={<Home />} />
            }
        });
    };

    return (
    <div className="register">
        <div className="reg">
            <h1>Registration</h1>
            <label>Username</label>
            <input type="text" onChange={(e)=> {
                setUsernameReg(e.target.value);
            }} />
            <label>Password</label>
            <input type="text"onChange={(e)=> {
                setPasswordReg(e.target.value);
            }} />
            <button onClick={register}>Register</button>
        </div>


        <div className="login">
        <h1>Login</h1>
            <input type="text" 
                placeholder="Username"
                onChange={(e)=> {
                setUsername(e.target.value);
            }} />
            <input type="password" 
                placeholder="Master Password"
                onChange={(e)=> {
                setPassword(e.target.value);
            }} />
            <button onClick={login}>LogIn</button>
        </div>
        <h1>{loginStatus}</h1>
    </div>
    );
}

export default Register;

// export const Register = () => {
//     return (
//         <form>
            
//         </form>
//     )
// }