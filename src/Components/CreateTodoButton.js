import React from 'react';
import '../Styles/CreateTodoButton.css';

const CreateTodoButton = () => {
    const onClickButton = (msg) => {
        alert(msg);
    }

    return (

        <div className="center">
            <button onClick={() => onClickButton('Aquí se debería abrir el modal')} className="CreateTodoButton">

            </button>
        </div>
    );
}

export {CreateTodoButton};
