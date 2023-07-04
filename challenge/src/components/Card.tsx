import React from "react";
import "../App.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={props.source} alt={props.alt} />
      </div>
      <div className="cardContent">
        <div>
          <h4>{props.name}</h4>
        </div>
        <div>
          <p>{props.material}</p>
        </div>
        <div className="line">
          <h4 className="amount">{props.amount}</h4>
          <h5>Add To Cart</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
