import React from "react";
import '../App.css'

export const Button = (props) => {
  return (
    <div>
      <button type={props.type}>{props.name}</button>
    </div>
  );
};
