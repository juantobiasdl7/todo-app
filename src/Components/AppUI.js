import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from '../Components/Modal.js';

const AppUI = () => {
    const {
      error,
      loading,
      searchedTodos,
      markTodo,
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext);


    return (
        <React.Fragment>
        <TodoCounter />
  
        <TodoSearch />

        <TodoList>
          {error && <p>Hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {(!loading && !searchedTodos.length) && <p>¡Crea tu primer Tarea!</p>}      
          
          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => markTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
          ))}
        </TodoList>

        {openModal && (
          <Modal>
            <p>gggggggggggggggggggggggg</p>
          </Modal>
        )}
          
        <CreateTodoButton setOpenModal={setOpenModal}/> 
      </React.Fragment>
    );
}

export {AppUI};
