import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
  const [inputText, setInputText] = useState("");
  const [id, setId] = useState();
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const [todos, setTodos] = useState([
    {
      id: "1",
      name: "study React",
      isCompleted: false,
    },
    {
      id: "2",
      name: "cook food",
      isCompleted: true,
    },
    {
      id: "3",
      name: "make music",
      isCompleted: false,
    },
  ]);

  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    handleFilter();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      {id}
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
