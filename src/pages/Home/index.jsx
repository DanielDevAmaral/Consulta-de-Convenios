import Unities from "../../components/unities";
import Navbar from "../../components/navbar";
import React from "react";
import logo from "../../assets/images/marca.webp";


function Homepage() {
    return (
      <div className="App">
        <Navbar 
          image={logo}
        />
  
        <Unities />

      </div>
    );
  }
  
  export default Homepage;