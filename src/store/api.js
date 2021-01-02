const toJson = (response) => response.json();

export const fetchTodos = () =>
  fetch("https://jsonplaceholder.typicode.com/todos").then(toJson);
