import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector(state => state);
  return (
    <>
      <figure className="image is-128x128">
        <img src={state.car.image} alt={state.car.name} />
      </figure>
      <h2>{state.car.name}</h2>
      <p>Amount: ${state.car.price}</p>
    </>
  );
};

export default Header;
