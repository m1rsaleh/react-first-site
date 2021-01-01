import React from 'react'
import Data from "./Data";
import Card from "./Card";

const Services = () => {
    return (
        <>
        <div className="my-5">
        <h1 style={{textAlign: 'center', color: "#0f2fe4"}} className="text-container">Our Service</h1>
        </div>
        <div className="container-fluid mb-5">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="row gy-4">
         {
                 Data.map((val,idx) =>{
                     return <Card
                     key={idx} 
                     imgSrc={val.imgSrc}
                     title={val.title}
                     text={val.text}
                     />
                 }      
                 ) 
                }
         </div> 
         </div>
         </div>
         </div>
   </>
    )
}

export default Services;
