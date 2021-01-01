import React from 'react'
import Helpers from "./Helpers";
import web from "../src/images/Celebrating Christmas.svg";
const About = () => {
    return (
        <>
         <Helpers
          name="About us"
          imgSrc={web}
          visit= "/contact"
          btname= "Contact now"
         />   
        </>
    );
};

export default About;
