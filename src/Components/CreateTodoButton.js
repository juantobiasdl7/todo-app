import React from 'react';
import '../Styles/CreateTodoButton.css';

const CreateTodoButton = ({ setOpenModal }) => {
    const onClickButton = () => {
        setOpenModal(true);
    }

    return (

        <div className="center">
            <button onClick={onClickButton} className="CreateTodoButton">

            </button>
        </div>
    );
}

export {CreateTodoButton};
