import React from "react";
import { TodoContext } from "../TodoContext";
import './todoForm.css';

function TodoForm(){
    const {setOpenModal, addNewTodo} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const cancel = () => {
        setOpenModal(false);
    };
    const captureInput = (event) => {
        setNewTodoValue(event.target.value);
    };

    const addNewTodoValue = (event) => {
        event.preventDefault();
        if(newTodoValue !== ''){
            addNewTodo(newTodoValue);
        }
        setOpenModal(false);
        setNewTodoValue('');
    };

    return (
        <form onSubmit={addNewTodoValue}>
            <label>
                ADD A NEW TODO 
            </label>
            <textarea
            placeholder="Add a new task that you need to do here" onInput={captureInput}/>
            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={cancel} className="TodoForm-button TodoForm-button--cancel">
                    Cancel
                </button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">
                    Add
                </button>
            </div>      
        </form>
    );
};

export {TodoForm};