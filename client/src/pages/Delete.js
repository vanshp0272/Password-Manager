import {React, useState} from "react";
import Navbar from './Navbar.js';
import Axios from 'axios';
import './Delete.css';

function Delete() {
    const [deltitle, setdeltitle] = useState('')

    const del = () => {
        Axios.post('http://localhost:3001/delpassword', {
            title: deltitle
        });
    };

    return (
        <>
        <Navbar />
        <div className="delete">
        <div className="del">
            <h1>Delete Account</h1>
            <input type="text" placeholder="Enter account name" onChange={(e)=> {
                setdeltitle(e.target.value);
            }} />
            <button onClick={del}>Delete</button>
        </div>
        </div>
        </>
    );
}

export default Delete;