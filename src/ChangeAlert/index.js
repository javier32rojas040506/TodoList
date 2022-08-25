import React from "react";
import "./changeAlert.css";
import { withStoregeListener } from "./withStorageListener";

function ChangeAlert({show, toggleShow}){
    if (show){
        return (
        <div className="ChangeAlert-bg">
            <div className="ChangeAlert-container">
            <p>Han habido cambios en otra pestaña o ventana del navegador.</p>
            <button
                className="TodoForm-button TodoForm-button--add"
                onClick={toggleShow}
            >
                Actualizar pagina
            </button>
            </div>
      </div>
        );
    }    
}

const ChangeAlertWithStorageListener = withStoregeListener(ChangeAlert);

export {ChangeAlertWithStorageListener}