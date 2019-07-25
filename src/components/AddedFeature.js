// Dependencies
import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_FEATURES } from "../action/actions";
// Components

const AddedFeature = props => {
  const dispatch = useDispatch();

  const removeFeature = e => {
    // dispatch an action here to remove an item
    e.preventDefault();
    dispatch({ type: REMOVE_FEATURES, payload: props.feature });
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeature}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
