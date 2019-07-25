// Dependencies
import React from "react";
import { useDispatch } from "react-redux";
// Components
import { BUY_ITEM } from "../action/actions";

const AdditionalFeature = props => {
  const dispatch = useDispatch();

  const buyItem = e => {
    // dipsatch an action here to add an item
    dispatch({ type: BUY_ITEM, payload: props.feature });
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={buyItem}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
