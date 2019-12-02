import React from "react";
import "../styles/Tails.css";

function Tails(props) {
  return (
    <div class="container">
  <div class="row">
    <div class="col">
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span onClick={() => props.removeDog(props.id)} className="remove"> x
      </span>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Tails;