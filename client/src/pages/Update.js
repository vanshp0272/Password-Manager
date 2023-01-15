import {React, useState} from "react";
import  Navbar from './Navbar.js';
import Axios from 'axios';
import './Update.css';

function Update() {
  const [updtitle, setupdtitle] = useState('')
  const [updpassword, setupdpassword] = useState('')

  const upd = () => {
      Axios.post('http://localhost:3001/updpassword', {
          title: updtitle,
          password: updpassword
      });
  };
      
  return(
    <>
    <Navbar/>
    <div className="update">
      <div className="upd">
            <h1>Update Password</h1>
            {/* <div className="up"> */}
              <input type="text" placeholder="Enter account name" onChange={(e)=> {
                  setupdtitle(e.target.value);
              }} />
              <input type="text" placeholder="Enter new password" onChange={(e)=> {
                  setupdpassword(e.target.value);
              }} />
              <button onClick={upd}>Update</button>
            {/* </div> */}
        </div>
    </div>
    </>
  );
}

export default Update;