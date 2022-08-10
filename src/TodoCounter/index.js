import React from "react";
import "./todoCounter.css";

function TodoCounter({totalTodos, completedTodos, loading}){
    return(
        <p className={`TodoCounter ${!!loading && "TodoCounterLoading"}`}>TodoCounter {completedTodos} de {totalTodos} Tareas</p>
    );
}

export default TodoCounter;