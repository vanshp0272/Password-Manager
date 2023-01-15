// import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Insert from './pages/Insert';  
import Update from './pages/Update';
import Delete from './pages/Delete';
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import protectedRoutes from "./protectedRoutes";
// import { useState, useEffect } from "react"; //useeffect instant api calls when page re renders
// import Axios from 'axios' // for api calls

function App() {
  return (
    // <div>
    //   <div>Hi</div>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              {/* <Route element = {<protectedRoutes />} /> */}
              <Route path="/Register" element={<Register />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Insert" element={<Insert />} />
              <Route path="/Update" element={<Update />} />
              <Route path="/Delete" element={<Delete />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
    // </div>
        
    );
  }

export default App;

  // const [currentForm, setCurrentForm] = useState('LogIn');
  

  // const [password, setPassword] = useState('')
  // const [title, setTitle] = useState('')
  // const [passwordList, setPasswordList] = useState([])

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/showpasswords").then((response) => {
  //     setPasswordList(response.data);
  //   });
  // }, []);
  
  // const addPassword = () => {
  //   Axios.post("http://localhost:3001/addpassword", {
  //     password: password,
  //     title: title,
  //   });
  // };

  // const decryptPassword = (encryption) => {
  //   Axios.post("http://localhost:3001/decryptpassword", {
  //     password: encryption.password,
  //     iv: encryption.iv,
  //   }).then((response) => {
  //     setPasswordList(
  //       passwordList.map((val) => {
  //         return val.id == encryption.id
  //           ? {
  //               id: val.id,
  //               password: val.password,
  //               title: response.data,
  //               iv: val.iv,
  //             }
  //           : val;
  //       })
  //     );
  //   });
  // };

  // return <div className="App">
  //   <div className="AddingPassword">
  //     <input
  //      type= "text"
  //      placeholder="Ex. password123"
  //      onChange={(event) => {
  //       setPassword(event.target.value);
  //      }}
  //      />
  //     <input 
  //      type= "text" 
  //      placeholder="Facebook"
  //      onChange={(event) => {
  //      setTitle(event.target.value);
  //      }}
  //      />
  //     <button onClick={addPassword}>Add Password</button>   
  //   </div>
  //   <div className="Passwords">
  //       {passwordList.map((val, key) => {
  //         return (
  //           <div
  //             className="password"
  //             onClick={() => {
  //               decryptPassword({
  //                 password: val.password,
  //                 iv: val.iv,
  //                 id: val.id,
  //               });
  //             }}
  //             key={key}>
  //           <h3>{val.title}</h3>
  //         </div>
  //       );
  //     })}
  //   </div>
  // </div>

