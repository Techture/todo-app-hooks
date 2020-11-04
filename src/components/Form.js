import React from "react";

const Form = ({ inputText, todos, setTodos, setInputText, setStatus }) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: Math.random() * 100, name: inputText, isCompleted: false },
    ]);

    setInputText("");
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
    setTodos(todos);
  };

  return (
    <form>
      <div className="wrap">
        <div className="select">
          <select onChange={handleStatus} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
        <input
          value={inputText}
          onChange={handleInputText}
          type="text"
          className="todo-input"
          placeholder="write a todo here"
        />
        <button onClick={handleSubmit} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
    </form>
  );
};

export default Form;
