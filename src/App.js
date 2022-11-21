import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';

// import './App.css';

// creamos una lista de array con objetos y propiedades - tareas pendientes
const todos = [
  {number:1, text:'Cortar Cebollar', completed:true, genero:'masculino'},
  {number:2, text:'Tomar Curso React', completed:false, genero:'masculino'},
  {number:3, text:'Lavar auto', completed:false, genero:'femenino'}
]

// funcion app - citando las propiedades del Componente App 
function App() {
  return (
    <React.Fragment>
      <TodoCounter />
    
      <TodoSearch />
       
      <TodoList>
         {todos.map(todo => (
           <TodoItem key={todo.number} number={todo.number} text={todo.text + todo.genero} />
          ))} 
      </TodoList>

      <CreateTodoButtom />

    </React.Fragment>
    );
}

export default App;

