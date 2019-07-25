import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const state = useSelector(state => state);
  return (
    <div className="content">
      <h4>Total Amount: ${state.car.price + state.additionalPrice}</h4>
    </div>
  );
};

export default Total;
