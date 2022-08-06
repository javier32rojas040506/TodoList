import React from "react";
import "./todoCounter.css";

function TodoCounter({totalTodos, completedTodos}){
    return(
        <p className="TodoCounter">TodoCounter {completedTodos} de {totalTodos} Tareas</p>
    );
}

export default TodoCounter;