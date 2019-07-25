import { BUY_ITEM, REMOVE_FEATURES } from "../action/actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

function reducer(state = initialState, action) {
  console.log(state.store);
  switch (action.type) {
    case BUY_ITEM:
      console.log(action.payload.price);
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },
        store: state.store.filter(feature => {
          if (action.payload.id === feature.id) {
            return false;
          } else {
            return true;
          }
        }),
        additionalPrice: state.additionalPrice + action.payload.price
      };
    case REMOVE_FEATURES:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(feature => {
            if (feature.id === action.payload.id) {
              return false;
            } else {
              return true;
            }
          })
        },
        store: [...state.store, action.payload],
        additionalPrice: state.additionalPrice - action.payload.price
      };
    default:
      return state;
  }
}

export default reducer;
