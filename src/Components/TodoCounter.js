import React from 'react';
import '../Styles/TodoCounter.css';

const TodoCounter = ({total, completed}) => {

    return (
        <h2 className="TodoCounter">Has completado {completed} de {total} Tareas</h2>
    );
}

export {TodoCounter};
