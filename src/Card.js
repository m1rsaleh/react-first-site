
import React from 'react';
import { NavLink} from "react-router-dom";
const Card = (props) => {
    return (
        <>
        <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgSrc} className="card-img-top" alt={props.imgSrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
            {props.text}
            </p>
            <NavLink style={{
               backgroundColor:"#0f2fe4",
               borderRadius: "20px"
            }}
              to="/" className="btn btn-primary">
              Learn More
            </NavLink>
          </div>
        </div>
      </div>
            
        </>
    );
};

export default Card
