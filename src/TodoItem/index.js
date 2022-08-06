import React from 'react';

import "./todoItem.css";
function TodoItem(props) {
    return(
        <li className={`TodoItem ${props.completed && 'TodoItemDone'}`}>
            <img 
            alt="Completed"
            src={`${props.completed ? 'https://cdn.discordapp.com/attachments/831560691252068372/1002765944160010300/ok-64.png':
            'https://cdn.discordapp.com/attachments/831560691252068372/1002688549105176587/ok-64.png'}`}
            onClick={props.completeTodo}
            />
            <p>{props.text}</p>
            <img alt="Delete" 
            src="https://cdn.discordapp.com/attachments/831560691252068372/1002692408443674685/x-mark-24.png"
            onClick={props.deleteTodo}/>
        </li>
    );
}
export default TodoItem;    