import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./reducers/loginReducer";
import { programReducer } from "./reducers/programReducer";

const rootReducer = combineReducers({
  program: programReducer,
  login: loginReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
