import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
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

    const addNewTodoValue = (value) => {};
    return(
        <TodoContext.Provider value={{
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
            addNewTodo}}>
            {props.children}
        </TodoContext.Provider>
    );
}
export {TodoContext, TodoProvider};
