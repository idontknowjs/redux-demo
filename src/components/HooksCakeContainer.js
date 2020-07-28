//ALTERNATIVE for CakeContainer.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
//useSelector is like mapStateToProps

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes); // Changed from numOfCakes: state.numOfCakes to above coz of multiple reducers
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes(HOOKS) = {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
