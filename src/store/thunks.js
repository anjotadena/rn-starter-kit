import * as api from "./api";
import actions from "./actions";

function fetchTodos() {
  return function (dispatch) {
    return api.fetchTodos().then(actions.resetTodos).then(dispatch);
  };
}
export default { fetchTodos };
