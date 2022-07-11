import React from "react";
import "./TodoList.css";

interface TodoListProps {
  todos: { id: string; text: string }[];
  onDeleteTodo: (todoId: string) => void;
}
const TodoList = (props: TodoListProps) => {
  const { todos, onDeleteTodo } = props;

  const onDeleteTodoHandler = (todoId: string) => {
    onDeleteTodo(todoId);
  };
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={onDeleteTodoHandler.bind(null, todo.id)}>
              DELETE
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
