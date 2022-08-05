import React from "react";
import { TodoContext } from "../TodoContext";
import "./createButton.css"
function CreateButton(props){
    const onClickButton =() => {
        props.openModal ? props.setOpenModal(false):props.setOpenModal(true)
    };
    return(
        <button className="CreateButton" onClick={onClickButton}>
            +
        </button>
    );
}
export default CreateButton;