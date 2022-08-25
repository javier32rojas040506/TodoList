import React from "react";

function useLocalStorage(itemNameToGet, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [sincronizedItem, setSincronizedItem] = React.useState(true);
    React.useEffect(() => {
      try {
        setTimeout(() => {
          const itemToPersist = localStorage.getItem(itemNameToGet);
          let itemJson;
          if(!itemToPersist){
            localStorage.setItem(itemNameToGet, JSON.stringify(initialValue));
            itemJson = initialValue;
          }else{
            itemJson = JSON.parse(localStorage.getItem(itemNameToGet));
          }
          setItem(itemJson);
          setLoading(false);
          setSincronizedItem(true);
        },1200)
      } catch (error) {
        setError(error);
      }
    },[sincronizedItem]);

    const sincronize = () => {
      setLoading(true);
      setSincronizedItem(false);
    };

    const saveItems = (newTodos) => {
      localStorage.setItem(itemNameToGet, JSON.stringify(newTodos));
      setItem(newTodos);
    };
    return {
      item,
      saveItems,
      loading,
      error, 
      sincronize
    };
  
  }

  export { useLocalStorage };