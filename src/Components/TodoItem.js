import React from 'react';
import '../Styles/TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon.js';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

const TodoItem = ({key, text, completed, onComplete, onDelete}) => {

    return (
        <li className="TodoItem">
            <CompleteIcon
                  completed={completed}
                  onComplete={onComplete}
            />
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                {text}
            </p>
            <DeleteIcon 
                onDelete={onDelete} 
            />
        </li>
    );
}

export {TodoItem};
