import React from "react";
import './Intro.css';
import HabtamuImage from '../../Image/Habtamu.jpg';
const Intro=()=>{
    return(
            <div className="container">
                <div className="column">
                   <div className="column-left">
                      <h1>Hi I am Habtamu Kassa!</h1>
                      <p>I have a skill in HTML, CSS, Javascript, and React.</p>
                   </div>
                   <div className="column-right">
                      <img src={HabtamuImage} alt="" />
                    <div className="i-contactinfo">
                      <p>Name: Habtamu Kassa</p>
                      <p>Email: habtamukassa@gmail.com</p>
                      <p>Phone: +251 943398424</p>
                    </div>
                   </div>
                </div>
            </div>

    );
}
export default Intro