import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (number = 1) => {
  // Setting default value to 1
  // So that manually buy Cake it does'nt breaks
  return {
    type: BUY_CAKE,
    payload: number, //Send additional info to the reducer
    //Go to cakeReducer
  };
};
