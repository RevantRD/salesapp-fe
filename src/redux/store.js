import { createStore } from "redux";
import { combineReducer } from "./combineReducer";
//Redux store
export const store = createStore(combineReducer);
