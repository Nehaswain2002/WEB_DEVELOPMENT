/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ name, age, occupation }) => {
  return (
    <div className="border-2 w-[250px]">
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
};

export default Card;