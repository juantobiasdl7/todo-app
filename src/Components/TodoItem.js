import React from 'react';

const TodoItem = (props) => {
    return (
        <li>
            <p>{props.text}</p>
        </li>
    );
}

export {TodoItem};
