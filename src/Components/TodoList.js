import React from 'react';

const TodoList = (props) => {
    return (
        <div>
            <section>
                <lu>
                    {props.children}
                </lu>
            </section>
        </div>
    );
}

export {TodoList};
