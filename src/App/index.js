import React from "react";
import './App.css'
import TodoCounter from "../TodoCounter/index.js";
import TodoSearch from "../TodoSearch/index.js";
import TodoList from "../TodoList/index.js";
import TodoItem from "../TodoItem/index.js";
import CreateButton from "../CreateButton/index.js";
import TodoSearchEmpty from "../TodoSearchEmpty";
import { useTodos } from "./useTodos";
import {Modal} from "../Modal/index.js";
import {TodoForm} from "../TodoForm/index.js";
import {TodoLoading} from "../TodoLoading/index.js";
import {TodoError} from "../TodoError/index.js";
import {TodoListEmpty} from "../TodoListEmpty/index.js";
import {TodoHeader} from "../TodoHeader/index.js";

function App() {
  const {
    error, loading, todos, 
    searchValue, completeTodos, 
    deleteTodos, openModal, 
    setOpenModal, totalTodos, 
    setSearchValue, addNewTodo,
    completedTodos} = useTodos();

    return( 
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            </TodoHeader>
            <TodoList
                error={error}
                loading={loading}
                todos={todos}
                searchValue={searchValue}
                totalTodos={totalTodos}
                OnError={ () => <TodoError/> }
                OnLoading={ () => <TodoLoading/>}
                OnEmptyList={ () => <TodoListEmpty/> }
                OnEmptySearch={ (TodoSearch) => <TodoSearchEmpty>No Hay resultados para {TodoSearch}</TodoSearchEmpty> }
                render={ todo => 
                          (<TodoItem key={todo.text} 
                                    text={todo.text}
                                    completed={todo.completed} 
                                    completeTodo={() => completeTodos(todo.text)}
                                    deleteTodo={() => deleteTodos(todo.text)}
                          />)}
              >
                 {/* {todo => 
                          (<TodoItem key={todo.text} 
                                    text={todo.text}
                                    completed={todo.completed} 
                                    completeTodo={() => completeTodos(todo.text)}
                                    deleteTodo={() => deleteTodos(todo.text)}
                          />)} */}
              </TodoList>
            {openModal &&   (<Modal>
                    <TodoForm setOpenModal={setOpenModal} addNewTodo={addNewTodo}/>
                            </Modal>)}
            <CreateButton setOpenModal={setOpenModal} openModal={openModal}/>
      </React.Fragment>
    );
}

export default App;
