import "./todoSearch.css";
import React from "react";

function TodoSearch({searchValue, setSearchValue} ){
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