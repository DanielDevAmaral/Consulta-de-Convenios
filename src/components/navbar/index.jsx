import React from 'react';
import "./navbar.css"

const navbar = (props) => {
    return (
      <>
      <div className="nav">
        <img src={props.image} alt="teste" />
        <h2>    
          <span>CONSULTA DE</span>
          <span>CONVÊNIOS</span>
        </h2>
        <p>{props.session}</p>
      </div>
      </>
    );
  };
  
  export default navbar;