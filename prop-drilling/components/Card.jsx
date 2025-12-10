import React from "react";

export const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="profile-image" />
      <h1>
        {props.username}, {props.age}
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, quaerat.
      </p>
    </div>
  );
};

export default Card;
