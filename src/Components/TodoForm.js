import React from 'react';
import { TodoContext } from '../TodoContext';

const TodoForm = () => {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    
    const onCancel = () => {
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="Escribe una nueva tarea"></textarea>
            <div>
                <button type="submit">
                    Añadir
                </button>
                <button type="button" onClick={onCancel}>
                    Cancelar
                </button>
            </div>
        </form>
    );
}

export {TodoForm};
