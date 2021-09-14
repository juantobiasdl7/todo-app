import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';

const AppUI = ({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    markTodo,
    deleteTodo
}) => {
    return (
        <React.Fragment>
        <TodoCounter 
          total={totalTodos}
          completed={completedTodos}
        />
  
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
  
        <TodoList>
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
  
        <CreateTodoButton /> 
      </React.Fragment>
    );
}

export {AppUI};
