import { combineReducers } from "redux";
import { getAllCitiesReducer } from "./getCities";
const allReducers = combineReducers({ getAllCitiesReducer });
export default allReducers;
