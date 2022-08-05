import React from "react";
import { TodoContext } from "../TodoContext";
import "./todoCounter.css";
function TodoCounter(){
    const {totalTodos, completedTodos} =  React.useContext(TodoContext);
    return(
        <p className="TodoCounter">TodoCounter {completedTodos} de {totalTodos} Tareas</p>
    );
}

export default TodoCounter;