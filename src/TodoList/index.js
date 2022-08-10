import React from 'react';
import "./todoList.css";
function TodoList(props) {
    const renderTodosItems = props.render || props.children
    return(
        <section>
            <ul className="TodoList">
                {props.error && props.OnError()}
                {props.loading && props.OnLoading()}
                {(!props.loading && props.todos.length <= 0) && props.OnEmptyList()}
                {props.todos.filter(todo => todo.text.toUpperCase().search(props.searchValue.toUpperCase()) > -1)
                .map(renderTodosItems)}
                {(props.todos.filter(todo => todo.text.toUpperCase()
                .search(props.searchValue.toUpperCase()) > -1).length<=0 && props.todos.length > 0)
                 && props.OnEmptySearch(props.searchValue)}
            </ul>
        </section>
    );
}
export default TodoList;