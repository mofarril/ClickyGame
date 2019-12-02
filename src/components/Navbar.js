import React from "react";

function Navbar() {
  return (
    <nav class="navbar sticky-top navbar-light bg-light">
    <div class="container">
  <a class="navbar-brand" href="/">Clicky Game</a>
 
  <span class="navbar-text">
      Click an Image to Play
    </span>
    <span class="navbar-text score">
      Score: 0 | Top Score: 0
    </span>
  </div>
</nav>
  );
}

export default Navbar;
