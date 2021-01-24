import React,{useContext,useReducer} from 'react'
import {TodosContext} from "./context";
import {todosReducer} from "./reducers";
import TodoList from "./components/todo_list";
import TodoForm from "./components/todo_form";
export default function App() {
  
const initialState = useContext(TodosContext);
const [state,dispatch] = useReducer(todosReducer,initialState);
  return (
    <TodosContext.Provider value={{state,dispatch}}>
    <div>
      <h2>Hellow</h2>
      <TodoForm/>
      <TodoList/>
    </div>
    </TodosContext.Provider>

  )
}
