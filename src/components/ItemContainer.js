import React from "react";
import { connect } from "react-redux";
import { buyIceCream, buyCake } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>No of items = {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}

//Have passed cake1 as props to this container
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake1 // ownProps.(....) means whatever in the component is passed as props matches it can be cake cake 1, anything
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  //Item container will behave as that container
  return {
    item: itemState,
  };
};

// Dispatch actions based on the props
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake1
    ? () => dispatch(buyCake()) //Dispatches the action
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

// If only want to subscribe to the mapDispatch but not subscribe to the state changes in store:
// export default connect(null, mapDispatchToProps)(ItemContainer);
