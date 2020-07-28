import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of IceCream = {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
}

export default IceCreamContainer;

// import React from "react";
// import { connect } from "react-redux";
// import { buyIceCream } from "../redux"; //is equivalent to import buyCake from "../redux/index";

// function IceCreamContainer(props) {
//   return (
//     <div>
//       <h2>Number of IceCream = {props.numOfIceCreams}</h2>
//       <button onClick={props.buyIceCream}>Buy IceCream</button>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   //Allows to use props.numOfCakes
//   return {
//     numOfIceCreams: state.iceCream.numOfIceCreams, //Can also be done in selectors file
//     // Changed from numOfCakes: state.numOfCakes to above
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   // Allows us to use props.buyCake
//   return {
//     buyIceCream: () => dispatch(buyIceCream()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
// // Connects React Comp ie. CakeContainer to Redux Store
