import React from "react";

const TodoItem = ({ id, name, todo, todos, setTodos, filteredTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log("handleDelete >>");
  };

  const handleComplete = () => {
    setTodos(
      filteredTodos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
    console.log("handleComplete >>");
  };

  return (
    <div className="todo">
      {/* <li className="todo-item">{id}</li> */}
      <li className={`todo-item  ${todo.isCompleted ? "completed" : ""}`}>
        {name}
      </li>
      <button onClick={handleComplete} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
