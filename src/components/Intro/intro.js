import React from "react";
import './Intro.css'
import Github from '../../Image/Github.png'
import HabtamuImage from '../../Image/Habtamu.jpg';
import Linkedin from '../../Image/Linkedin.png'
const Intro=()=>{
    return(
            <div className="container">
                <div className="column">
                   <div className="column-left">
                      <h1>Hi I am Habtamu Kassa!</h1>
                      <p>I have a skill in HTML, CSS, Javascript, and React.</p>
                        <button className="i-button">hello every one !</button>
                      <img src={Github} alt=""/>
                      <img src={Linkedin} alt=""/>
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