import "./todoSearch.css";
import React from "react";
import { TodoContext } from "../TodoContext";
function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const readSearchInput = function(inputEvent) {
        setSearchValue(inputEvent.target.value);
    }
    return(
        <>
            <input 
            className="TodoSearch" 
            placeholder="something"
            onChange={readSearchInput}
            />
            <div style={{color:'white'}}>{searchValue}</div>
        </>
    );
}
export default TodoSearch;