import React from "react";
import './App.css'
import TodoCounter from "../TodoCounter/index.js";
import TodoSearch from "../TodoSearch/index.js";
import TodoList from "../TodoList/index.js";
import TodoItem from "../TodoItem/index.js";
import CreateButton from "../CreateButton/index.js";
import { TodoContext } from "../TodoContext";
import {Modal} from "../Modal/index.js";
import {TodoForm} from "../TodoForm/index.js";
import {TodoLoading} from "../TodoLoading/index.js";
import {TodoError} from "../TodoError/index.js";
import {TodoListEmpty} from "../TodoListEmpty/index.js";

function AppUI(){
    const {error,
    loading, todos, searchValue, completeTodos, deleteTodos, openModal, setOpenModal} = React.useContext(TodoContext);
    return( 
        <React.Fragment>
            {error && <TodoError/>}
            <TodoCounter />
            <TodoSearch/>
            <TodoList>
                {loading && <TodoLoading/>}
                { !loading && todos.length <= 0 ? <TodoListEmpty/>: todos.filter(todo => todo.text.toUpperCase().search(searchValue.toUpperCase()) > -1)
                .map(todo => <TodoItem key={todo.text} 
                text={todo.text}
                completed={todo.completed} 
                completeTodo={() => completeTodos(todo.text)}
                deleteTodo={() => deleteTodos(todo.text)}
                />)}
            </TodoList>
            {openModal &&   
                (<Modal>
                    <TodoForm/>
                </Modal>)}
            <CreateButton setOpenModal={setOpenModal} openModal={openModal}/>
      </React.Fragment>
    );
}
export default AppUI;
