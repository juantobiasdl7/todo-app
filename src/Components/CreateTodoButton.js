import React from 'react';
import '../Styles/CreateTodoButton.css';

const CreateTodoButton = ({ setOpenModal, openModal }) => {
    const onClickButton = () => {
        if (openModal) {
            setOpenModal(false);
        } else {
            setOpenModal(true);
        }
    }

    return (

        <div className="center">
            <button onClick={onClickButton} className="CreateTodoButton">

            </button>
        </div>
    );
}

export {CreateTodoButton};
