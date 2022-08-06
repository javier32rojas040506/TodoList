import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos(){
    const {
        item: todos,
        saveItems: saveTodos,
        loading,
        error } = useLocalStorage('EXAMPLETODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const completedTodos = todos.filter(todo => todo.completed===true).length;
    const totalTodos = todos.length;

    const addNewTodo = (value) => {
        todos.push({
            text: value,
            completed: false
        });
        saveTodos(todos);
    };

    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        if(newTodos[todoIndex].completed === true){
            newTodos[todoIndex].completed = false;
        }else{
            newTodos[todoIndex].completed = true;
        }
        saveTodos(newTodos);
    }

    const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return(
        {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            todos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal,
            addNewTodo
        }
    );
}
export { useTodos };
