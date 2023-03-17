import React from "react";
import '../css/header.css'


function Header(){
    return (
            
        <nav>
            <center>
        <ul>
          <li><a href="/api">Home</a></li>
          <li><a href="/api/AllLocation">All Location</a></li>
          <li><a href="/api/allDevice">All Devies</a></li>
          <li><a href="/api/addlocation">Add Location</a></li>
          <li><a href="/api/addDevice">Add Devies</a></li>
        </ul>
        </center>
      </nav>
      
    )
}

export default Header;