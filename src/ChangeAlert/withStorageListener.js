import React from 'react';

function withStoregeListener(WrappedComponent){
    return function WrappedComponentWithStoregeListener(props)
    {
        const [storageChange, setStorageChange] =  React.useState(false);
        React.useEffect(() =>{ 
        window.addEventListener('storage', (change) => {
            if (change.key === 'EXAMPLETODOS_V1'){
                setStorageChange(true);
            }
        });
        },[]);
        const toggleShow = () => {
            props.sincronizeTodos();
            setStorageChange(false);
        }
        return(<WrappedComponent
                    show={storageChange}
                    toggleShow={toggleShow}
        />);
    }
}

export {withStoregeListener};