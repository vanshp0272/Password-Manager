import React, {useState} from "react";
import './Login.css';
import Axios from 'axios';
function Register() {
    
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

    // const [loginStatus, setLoginStatus] = useState('');

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: usernameReg,
            password: passwordReg
        })
        window.location.href = "http://localhost:3000";
    };

    return (
        <div className="badi">
        <div className="main">
            <div className="auth">
                <h1>Register</h1>
                <div className="reg">  
                    <label>Username</label>  
                    <input type="text" placeholder="Enter your username" onChange={(e)=> {
                        setUsernameReg(e.target.value);
                    }} />
                    <label>Password</label>
                    <input type="text" placeholder="Create Master password" onChange={(e)=> {
                        setPasswordReg(e.target.value);
                    }} />
                    <button onClick={register}>Register</button>
                </div>
            </div>
        </div>
        </div>
        // <div className="register">
        //     <div className="reg">
        //         <h1>Register</h1>
        //     </div>
        //     <div className="regcont">
        //         <input type="text" placeholder="Enter your username" onChange={(e)=> {
        //             setUsernameReg(e.target.value);
        //         }} />
        //         <input type="text" placeholder="Create Master password" onChange={(e)=> {
        //             setPasswordReg(e.target.value);
        //         }} />
        //     </div>
        //     <div className="regsubmit">
        //         <button onClick={register}>Register</button>
        //     </div>
        // </div>
    );
}


export default Register;

// export const Register = () => {
//     return (
//         <form>
            
//         </form>
//     )
// }