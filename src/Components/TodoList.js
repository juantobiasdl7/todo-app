import React from 'react';
import '../Styles/TodoList.css';

const TodoList = (props) => {
    return (
        <div>
            <section>
                <ul>
                    {props.children}
                </ul>
            </section>
        </div>
    );
}

export {TodoList};
