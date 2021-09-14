import React from 'react';
import { AppUI } from './AppUI.js';




const defaultTodos = [
  {text: 'Hacer especificaciones de Analytics', completed: false},
  {text: 'Determinar objetivos en ClickUp', completed: true},
  {text: 'Hacer sprint de la siguiente semana', completed: false},
  {text: 'Mandar correo a ClickUp para que activen el business plan', completed: false}
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const markTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    if (newTodos[todoIndex].completed === false){
      newTodos[todoIndex].completed = true;
    }else{
      newTodos[todoIndex].completed = false;
    }
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }



  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      markTodo={markTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
