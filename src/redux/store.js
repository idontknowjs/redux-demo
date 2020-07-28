import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

// redux-thunk will enable to define async actions in application
// AND BECAUSE OF THUNK, Action creator can now return a function
// const store = createStore(rootReducer, applyMiddleware(logger));

export default store;

// After using applymiddleware
// It logs the action showing time stamp, the prev state, action, the next state
