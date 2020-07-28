import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux"; //is equivalent to import buyCake from "../redux/index";

function CakeContainer(props) {
  //This props come from below
  return (
    <div>
      <h2>Number of Cakes = {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  // Extracts the numOfCakes from the store
  //Allows to use props.numOfCakes
  return {
    numOfCakes: state.cake.numOfCakes, //Can also be done in selectors file
    // Changed from numOfCakes: state.numOfCakes to above
  };
};

const mapDispatchToProps = (dispatch) => {
  // Allows us to use props.buyCake
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
// Connects React Comp ie. CakeContainer to Redux Store
