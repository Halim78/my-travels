import React from "react";

const Travel = props => (
  <ul>  
    <li>{props.destination}</li>
    <li>{props.pays}</li>
    <li>{props.photo}</li>
    <li>{props.distance}</li>
  </ul>
  
);

export default Travel;