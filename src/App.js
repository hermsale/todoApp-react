import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';

// import './App.css';

// creamos una lista de array con objetos y propiedades - tareas pendientes
const todos = [
  {index:1, text:'Cortar Cebollar', completed:true, genero:'masculino'},
  {index:2, text:'Tomar Curso React', completed:false, genero:'masculino'},
  {index:3, text:'Lavar auto', completed:false, genero:'femenino'}
]

// funcion app - citando las propiedades del Componente App 
function App() {
  return (
    <React.Fragment>
      <TodoCounter />
    
      <TodoSearch />
       {/* podemos hacer uso en TodoList de la propiedad children, ya que  hicimos apertura y cierre del componente */}
      <TodoList>
         {todos.map(todo => (
           <TodoItem key={todo.index} number={todo.index} text={todo.text} genero={todo.genero} completed={todo.completed} />
          ))} 
      </TodoList>

      <CreateTodoButtom />

    </React.Fragment>
    );
}

export default App;

