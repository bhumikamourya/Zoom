import React from "react";
import "../App.css";
import {Link} from "react-router-dom";
export default function Landing() {
    return (  
        <div className="landingPage-container">
           <nav>
            <div className="navHeader"><h2>Video Call</h2></div>
            <div className="navList">
                <p>Join as guest</p>
                <p>Register</p>
               <div role="button">
               <p> logIn</p>
                </div>
            </div>
           </nav>


           <div className="landingMain-container">
            <div>
                <h1><span style={{color: "#81c0f8"}}>Connect</span> With Your Loved Ones</h1>
                <p>Cover a distance by Video Call</p>
                <div role="button">
                    <Link to="/home">Get Started</Link>
                </div>
            </div>
            <div>
                <img src="/assets/mobile.png" alt=""/>
            </div>
           </div>

        </div>
    );
 }
