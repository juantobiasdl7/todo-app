import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoForm } from './TodoForm.js';
import { Modal } from '../Components/Modal.js';
import { TodoError } from './TodoError';
import { TodoLoading } from './TodoLoading';
import { EmptyTodos } from './EmptyTodos';

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
          {error && <TodoError error={error}/>}
          {loading && <TodoLoading /> }
          {(!loading && !searchedTodos.length) && <EmptyTodos /> }      
          
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
            <TodoForm/>
          </Modal>
        )}
          
        <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/> 
      </React.Fragment>
    );
}

export {AppUI};
