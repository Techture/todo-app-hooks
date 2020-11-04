import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
