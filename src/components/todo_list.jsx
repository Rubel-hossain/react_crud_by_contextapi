import React, { useContext } from "react";
import { TodosContext } from "../context";
export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);

  return (
    <div className="container mx-auto font-mono">
      <ul className="list-reset text-white p-0">
        {state.todos.map((todo) => (
          <li
            className={`bg-gray-500 border-black bordered-dashed border-2 my-2 py-4 px-5 ${
              todo.completed && "line-through bg-red-400"
            }`}
            key={todo.id}
            onDoubleClick={() =>
              dispatch({ type: "TOGGLE_TODOS", payload: todo })
            }
          >
            {todo.title}
            <span className="cursor-pointer ml-4">
              <button
                className="bg-green-500 px-3 py-2"
                onClick={() =>
                  dispatch({ type: "SET_CURRENT_TODO", payload: todo })
                }
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 px-3 py-2 ml-2"
                onClick={() => dispatch({ type: "REMOVE", payload: todo })}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
