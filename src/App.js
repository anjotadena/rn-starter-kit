import React, { useState } from "react";
import { Text, View } from "react-native";
import { connect, useDispatch } from "react-redux";
import actions from "./store/thunks";

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: function (payload) {
      console.log("PAYLOAD", payload);
    },
  };
}

const App = ({ todos, onAddTodo }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    (async () => {
      setLoading(true);

      await dispatch(actions.fetchTodos());

      setLoading(false);
    })();
  }, []);

  console.log(loading, todos.size);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>React</Text>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
