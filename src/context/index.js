import React from "react";

export const TodosContext = React.createContext({
    todos: [
        {id: 1, title: "todo one title", completed: false},
        {id: 2, title: "todo two title", completed: false},
        {id: 3, title: "todo three title", completed: false},
        {id: 4, title: "todo four title", completed: false},
        {id: 5, title: "todo five title", completed: false},
        {id: 6, title: "todo six title", completed: false},
    ],
    currentTodo: {
        
    }
});