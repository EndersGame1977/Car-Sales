import React from "react";
import { useSelector } from "react-redux";

import AddedFeature from "./AddedFeature";

const AddedFeatures = () => {
  const state = useSelector(state => state);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {state.car.features.length ? (
        <ol type="1">
          {state.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
