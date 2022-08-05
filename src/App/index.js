import React from "react";
import AppUI from "./AppUI.js";
import { TodoContext, TodoProvider} from "../TodoContext";

// const defaultTodos = [
//   {text:'TASK ONE', completed: false},
//   {text:'TASK TWO', completed: true}, 
//   {text:'TASK TREE', completed: true},
//   {text:'TASK FOUR', completed: false},
//   {text:'TASK FIVE', completed: false}, 
//   {text:'TASK SIX', completed: false}
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
