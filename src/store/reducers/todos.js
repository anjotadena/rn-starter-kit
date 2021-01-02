import { handleActions } from "redux-actions";
import { List } from "immutable";

import actions from "../actions";

function resetTodos(state, action) {
  console.log("RESET");
  return List(action.payload);
}

export default handleActions(
  {
    [actions.resetTodos]: resetTodos,
  },
  List() // Initial state
);
