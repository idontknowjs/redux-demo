// USE OF PAYLOAD REFER TO CAKEACTIONS.JS

import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux"; //is equivalent to import buyCake from "../redux/index";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes = {props.numOfCakes}</h2>
      <input
        type="text "
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      ></input>
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
      {/* Pass input value as a parameter */}
    </div>
  );
}

const mapStateToProps = (state) => {
  //Allows to use props.numOfCakes used above
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  // Allows us to use props.buyCake used above
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
  //Now have to change the def of buyCake()
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
// Connects React Comp ie. CakeContainer to Redux Store
