import React, {useState} from "react";
import './Login.css';

import Axios from 'axios';
function Login() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [loginStatus, setLoginStatus] = useState('');

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password
        }).then((response)=> {
            if(response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                // setLoginStatus(response.data[0].username);
                window.location.href = "http://localhost:3000/Home";
            }
        });
    };

    return (
    <div className="badi">
    <div className="main">    
        <div className="auth">
            <h1>Login</h1>
            <div className="login">
                <label>Username</label>
                <input type="text" placeholder="Enter Username" onChange={(e)=> {setUsername(e.target.value);}} />
                <label>Password</label>
                <input type="password" placeholder="Enter Master Password" onChange={(e)=> { setPassword(e.target.value);}} />
                <button onClick={login}>LogIn</button>  
            </div>
            <div className="link">  
                <a href="http://localhost:3000/Register">Need an account? Register</a>        
                        
                <h1>{loginStatus}</h1>
            </div>
            
        
        </div>
    </div>
    </div>
    // <div className="bg">
    //     <div className="login">
    //         <div className="log">
    //             <h1>Login</h1>
    //         </div>
    //         <div className="cont">
    //             <input type="text" 
    //                 placeholder="Enter Username"
    //                 onChange={(e)=> {
    //                 setUsername(e.target.value);
    //             }} />
    //             <input type="password" 
    //                 placeholder="Enter Master Password"
    //                 onChange={(e)=> {
    //                 setPassword(e.target.value);
    //             }} />
    //         </div>
    //         <div className="logsubmit"> 
    //             <div className="submitlog">
    //                 <button onClick={login}>LogIn</button>
    //             </div>
    //             <div className="submitsign">
    //                 <div className="signp">
    //                     <p><u>Need an account?</u></p>
    //                 </div>
    //                 <div className="signa">
    //                     <a href="http://localhost:3000/Register">Register</a>        
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="status">
    //         <h1>{loginStatus}</h1>
    //     </div>
    // </div>
    );
}

export default Login;