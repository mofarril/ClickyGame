import React from "react";
import "../styles/Navbar1.css";

function Navbar (props) {
  return (
    
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container">
  <a className="navbar-brand" href="/">Clicky Game</a>
 
  <span className="navbar-text mr-2">
    {props.message}
    </span>
    <span className="navbar-text score">
      Score: {props.currentScore} | Top Score: {props.highScore}
    </span>
  </div>
</nav>

  );

}


export default Navbar;