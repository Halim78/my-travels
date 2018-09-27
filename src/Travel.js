import React from "react";

const voyage = [
    { destination:"paris", country:"france", photo:"oui", distance:"10 000" },
    { destination:"madrid", country:"espagne", photo:"non", distance:"1 000" },
    { destination:"lyon", country:"france", photo:"non", distance:"6 000" },
    { destination:"marseille", country:"france", photo:"oui", distance:"9 000" },
    { destination:"lille", country:"france", photo:"oui", distance:"1 000" }
] 
const Travels = () => {
  return  voyage.map((element, index) => {   
        return <div>
            <h1>Voyage</h1>
            <ul key = {index}>
                <li> {element.destination}</li>
                <li> {element.country}</li>
                <li> {element.photo}</li>
                <li> {element.distance}</li>
            </ul>
        </div>

    })
}

export default Travels;

