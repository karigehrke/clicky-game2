import React from "react";
import "./style.css";

function Navbar(props) {
    return (
 
<nav className="navbar shadow">
  <h3>Clicky Game</h3>

  {/* Score */}
  <h3>{`${props.primaryHeadingText} ${props.primaryHeadingValue}`}</h3>
  {/* Top Score */}
  <h3>{`${props.secondaryHeadingText} ${props.secondaryHeadingValue}`}</h3>
</nav>
    )
    }

export default Navbar;