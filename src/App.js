import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


// import './App.css';

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




  return (
    <React.Fragment>
      {/* le pasamos al componente encargado de tomar el control de Todo's los valores */}
      <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
      />
    
    {/* pasamos por props el estado  */}
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
       {/* podemos hacer uso en TodoList de la propiedad children, ya que  hicimos apertura y cierre del componente */}
      <TodoList>
        
         {searchedTodos.map(todo => (
           <TodoItem key={todo.index} number={todo.index} text={todo.text} completed={todo.completed} />
          ))} 
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
    );
}

export default App;


