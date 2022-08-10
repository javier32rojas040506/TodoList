import "./todoSearch.css";
import React from "react";

function TodoSearch({loading, setSearchValue} ){
    const readSearchInput = function(inputEvent) {
        setSearchValue(inputEvent.target.value);
    }
    return(
        <>
            <input 
            className="TodoSearch" 
            placeholder="something"
            onChange={readSearchInput}
            disabled={loading}
            />
        </>
    );
}
export default TodoSearch;