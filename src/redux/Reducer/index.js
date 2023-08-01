import { combineReducers } from "redux";
import {cakeReducer} from "./cakeReducer";
import {deptReducer} from "./deptReducer";

export const reducers = combineReducers({
cake:cakeReducer,
dept: deptReducer,
})