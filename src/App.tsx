import React, { useEffect, useState } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./models/Todo";

function App() {
  let [todos, setTodos] = useState<Todo[]>([
    { id: "t1", text: "Finish the course." },
  ]);

  function todoAddHandler(todoValue: string) {
    console.log("New Todo Value: ", todoValue);
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: new Date().toISOString(),
        text: todoValue,
      },
    ]);
    return todoValue;
  }

  function todoDeleteHandler(todoId: string) {
    setTodos((prevTodos) => {
      const currentTodos = prevTodos.filter((todo) => todo.id !== todoId);

      return currentTodos;
    });
  }

  /// useEffect(() => {}, [todos]);

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}></NewTodo>
      <TodoList todos={todos} onDeleteTodo={todoDeleteHandler}></TodoList>
    </div>
  );
}

export default App;
