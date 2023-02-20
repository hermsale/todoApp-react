import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';


// plantilla de tareas pendientes
// const defaultTodos = [
//   {index:1, text:'Cortar Cebolla', completed:true},
//   {index:2, text:'Tomar curso react', completed:false},
//   {index:3, text:'Lavar auto', completed:false},
//   {index:4, text:'a', completed:false}
// ]

// crearemos nuestros hook's personalizados 

// Este lo vamos a utilizar en todas partes, para compartir la información del estado 
/* <TodoContext.Consumer></TodoContext.Consumer> */


// funcion app - citando las propiedades del Componente App 
function App() {
 
  // envolvemos al AppUI con el componente TodoProvider
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
       
    
  );
}

export default App;