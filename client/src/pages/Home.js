import React from "react";
import './Home.css';
import  Navbar from './Navbar.js';
import Typical from 'react-typical';
// import {  Link } from "react-router-dom";

function Home(){
    
    return (
    <div>
        <Navbar />
        
        <div className="app">
            <header className="app-header">
            <h1>
                <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                    'Welcome to the Password Manager...',
                    1000
                ]}
                />
                </h1>
            <p>Now you can store passwords of all your acoounts like{' '}
                <Typical 
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Facebook✅',
                        1000,
                        'Instagram✅',
                        1000,
                        'LinkedIn✅',
                        1000,
                        'Github✅',
                        1000,
                        'Net banking✅'
                    ]}
                />
            </p>
            </header>
        </div> 
    </div>
    );
  }
  export default Home;
