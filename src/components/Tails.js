import React from "react";
import "../styles/Tails.css";

function Tails (props) {
  return (
    <div className="container" id="tails"> 
      <div className="row">
    <div className="card" onClick={()=>props.hanClick(props.id)}>
      <div className="img-container" >
        {props.value}
        <img alt={props.name} src={props.image} />
       </div>
     </div>
    </div>
    </div>    

    
  );
  
}

export default Tails;