import React from "react";
import "./createButton.css";
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