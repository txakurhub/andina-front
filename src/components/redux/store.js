import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { programReducer } from "./reducers/programReducer";

const rootReducer = combineReducers({
  program: programReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
