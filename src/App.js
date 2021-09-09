import React from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoItem } from './Components/TodoItem';
import { TodoList } from './Components/TodoList';
import { TodoSearch } from './Components/TodoSearch';
import { CreateTodoButton } from './Components/CreateTodoButton';


const todos = [
  {text: 'Hacer especificaciones de Analytics', completed: false},
  {text: 'Determinar objetivos en ClickUp', completed: true},
  {text: 'Hacer sprint de la siguiente semana', completed: false},
  {text: 'Mandar correo a ClickUp para que activen el business plan', completed: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            />
        ))}
      </TodoList>

      <CreateTodoButton /> 
    </React.Fragment>
  );
}

export default App;
