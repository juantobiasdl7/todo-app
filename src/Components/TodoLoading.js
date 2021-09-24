import React from 'react';
import '../Styles/TodoLoading.css';

const TodoLoading = () => {
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Estamos cargando, no deseperes...  </p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    );
}

export {TodoLoading};
