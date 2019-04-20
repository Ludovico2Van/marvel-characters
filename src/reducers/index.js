import { combineReducers } from "redux";
import characters from "./characters";
import pagination from "./pagination";
import character from "./character";

export default combineReducers({
    characters,
    character,
    pagination
  })
