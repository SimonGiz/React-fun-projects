import React from "react";
import "./Card.css";

function Card(prop) {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${prop.monster.id}?set=set2`}
        alt="Funny robots"
      />
      <h1>{prop.monster.name}</h1>
      <p>{prop.monster.email}</p>
    </div>
  );
}

export default Card;
