import { ActionType } from "../types/cakeType";

let initalState = {
  noOfCake: 0,
};

export const cakeReducer = (state = initalState, action) => {
//   console.log(action,"actionaction")
  switch (action.type) {
    case ActionType.BUY_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake + action.payload,
      };
    default:
      return state;
  }
};