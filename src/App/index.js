import React from 'react';
import { AppUI } from './AppUI';


// creamos una lista de array con objetos y propiedades - tareas pendientes
const defaultTodos = [
  {index:1, text:'Cortar Cebolla', completed:true},
  {index:2, text:'Tomar curso react', completed:false},
  {index:3, text:'Lavar auto', completed:false},
  {index:4, text:'a', completed:false}
]

// funcion app - citando las propiedades del Componente App 
function App() {
  // react Hooks //////////////////////////////////////////////////////////////////

  // estado inicial de nuestros Todo's
  // creamos un estado para mostrar los Todo's - le asignamos los Todo's que tenemos en nuestro array por defaultTodos
    const [todos, setTodos] = React.useState(defaultTodos);


    // se guarda el estado y una funcion para actualizarlo, esto es propio del objeto React.useState
    const [searchValue, setSearchValue] = React.useState('');  

    // guardara la cantidad de todo's completos - si todo.completed es true
    const completedTodos = todos.filter( todo => !!todo.completed).length;
    const totalTodos = todos.length;

  // creamos un array vacio que almacenara las coincidencias de la busqueda
    let searchedTodos = [];

    // si no hay nada escrito en searchValue, mostramos todos los todos
    if(!searchValue.length >=1) {
      searchedTodos = todos;
    }else{
      // guardamos en searchTodos el filtro donde la condicion de aparicion es que este incluido algo de todoText en searchText
      searchedTodos = todos.filter(todo =>{
        // pasamos a minuscula el texto del array
        const todoText = todo.text.toLowerCase();
        // pasamos a minuscula la busqueda
        const searchText = searchValue.toLowerCase();
        // si algo de todoText esta en searchText, lo retornamos
        return todoText.includes(searchText);
       })
    }


    // completetar Todo's 

    // recibimos el index para compararlo y ver cual cumple la condicion, para pasarlo a completo/incompleto
    const toggleCompleteTodo = (index) => {
      // guardamos el indice de la coincidencia, entre el index que nos llega y el del array
      const todoIndex = todos.findIndex(todo => todo.index === index);
      console.log(todoIndex);
      // clonamos en un nuevo array los todos
      const newTodos = [...todos];
      // le cambiamos la propiedad complete 
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      // cambiamos el estado de todos 
      setTodos(newTodos); 
    }

    
    // eliminar Todo's

    // recibimos el index para compararlo y ver cual cumple la condicion, para pasarlo a completo/incompleto
    const deleteTodo = (index) => {
      // guardamos el indice de la coincidencia, entre el index que nos llega y el del array
      const todoIndex = todos.findIndex(todo => todo.index === index);
      console.log(todoIndex);
      // // clonamos en un nuevo array los todos
      const newTodos = [...todos];
      // eliminamos el elemento 
      newTodos.splice(todoIndex,1);
      // // cambiamos el estado de todos 
      setTodos(newTodos); 
    }


  return (
    <AppUI 
        total={totalTodos} 
        completed={completedTodos} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        searchedTodos={searchedTodos}
        toggleCompleteTodo={toggleCompleteTodo}
        deleteTodo={deleteTodo}
    />
  );
}

export default App;