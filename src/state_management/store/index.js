import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "state_management/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// store
const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
