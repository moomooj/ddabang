import { combineReducers } from "redux";
import user from "./user";
import options from "./options";

const rootReducer = combineReducers({
  user,
  options,
});

export default rootReducer;
