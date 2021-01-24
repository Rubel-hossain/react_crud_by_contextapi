import React, { useState, useEffect, useContext } from "react";
import { TodosContext } from "../context";
import { todosReducer } from "../reducers";
export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const {
    state: { currentTodo = {} },
    dispatch,
  } = useContext(TodosContext);
  const handleSubmit = (e) => {
    if (currentTodo.title) {
      dispatch({ type: "UPDATE_TODO", payload: todo });
    } else {
      dispatch({ type: "ADD_TODO", payload: todo });
    }
    setTodo("");
    e.preventDefault();
  };
  useEffect(() => {
    if (currentTodo.title) {
      setTodo(currentTodo.title);
    }
  }, [currentTodo.id]);
  return (
    <div className="container mx-auto">
      <h2>Todo Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-grey-darker mb-3"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
    </div>
  );
}
