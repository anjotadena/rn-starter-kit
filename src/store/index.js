import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import todos from "./reducers/todos";

const reducers = combineReducers({
  todos,
});

// we could add redux persist later

export default createStore(reducers, applyMiddleware(thunk));
