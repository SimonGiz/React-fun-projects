import React from "react";
import "./Card-list.css";
import "./Card";
import Card from "./Card";

export const Cardlist = (prop) => {
  return (
    <div className="card-list">
      {prop.monsters.map((monster) => (
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  );
};
