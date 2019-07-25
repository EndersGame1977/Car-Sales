export const REMOVE_FEATURES = "REMOVE_FEATURES";
export const BUY_ITEM = "BUY_ITEM";

export const takeAwayFeature = item => {
  return { type: REMOVE_FEATURES, payload: item };
};

export const addItem = item => {
  console.log(item);
  return { type: BUY_ITEM, payload: item };
};
