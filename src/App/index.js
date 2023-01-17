import React from 'react';
import { AppUI } from './AppUI';


// creamos una lista de array con objetos y propiedades - tareas pendientes
// const defaultTodos = [
//   {index:1, text:'Cortar Cebolla', completed:true},
//   {index:2, text:'Tomar curso react', completed:false},
//   {index:3, text:'Lavar auto', completed:false},
//   {index:4, text:'a', completed:false}
// ]

// crearemos nuestros hook's personalizados 

// este hook nos devolvera el item que hayamos guardado en LocalStorage. Ese elemento lo guardaremos dentro de un parametro al que llamaremos itemName 

// este hook nos traera el itemName hacia donde nos direccionaremos en el localStorage para guardar items 
function useLocalStorage(itemName, initialValue) {
  // creamos la variable que almacenara los TODO's (si es que los hay) guardados en TODOS_V1 (o la version que nos traiga por parametro en itemName)
  const localStorageItem = localStorage.getItem(itemName);
  // variable que contendra el objeto JavaScript una vez parsiado el archivo JSON
  let parsedItem;

  
  // si no hay nada en localStorageItem, que cree un array vacio y listo para rellenar
  // Esta posibilidad se puede dar si es un usuario que recien inicia la aplicación y no tiene nada cargado
  if(!localStorageItem){
    // esta variable es la que manejara el estado inicial de nuestros Todo's. como no hay nada cargado asignamos un array vacio
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  }else{
    // en el caso que si haya objetos en localStorageItem, se lo pasamos a la variable encargada del manejo de estados de Todo's
    parsedItem = JSON.parse(localStorageItem);
  }

   // estado inicial de nuestros Todo's
  // creamos un estado para mostrar los Todo's - le asignamos los Todo's que tenemos en nuestro array por defaultTodos
    const [item, setItem] = React.useState(parsedItem);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // funcion para guardar cambios de los Todos en el LocalStorage
    const saveItem = (newItem)=>{
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName,stringifiedItem);
      
      setItem(newItem); 
    }

    // por medio del return le enviamos al App lo necesario, para que funcione la aplicacion 
    return [
      item,
      saveItem
    ]
}


// funcion app - citando las propiedades del Componente App 
function App() {
  // react Hooks personalizado //////////////////////////////////////////////////////////////////////////////

  // traeremos las variables que conectan con el LocalStorage, de nuestro custom hook - le pasamos por parametro la key del LocalStorage
  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);


    // se guarda el estado y una funcion para actualizarlo, esto es propio del objeto React.useState
    const [searchValue, setSearchValue] = React.useState('');  

    //////////////////////////////////////////////////////////////////////////////////
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

  

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // completetar Todo's - esta funcion nos permite marcar como completo o sin completar un TODO 

    // recibimos el index para compararlo y ver cual cumple la condicion, para pasarlo a completo/incompleto
    const toggleCompleteTodo = (index) => {
      // guardamos el indice de la coincidencia, entre el index que nos llega y el del array
      const todoIndex = todos.findIndex(todo => todo.index === index);
      console.log(todoIndex);
      // clonamos en un nuevo array los todos
      const newItem = [...todos];
      // le cambiamos la propiedad complete 
      newItem[todoIndex].completed = !newItem[todoIndex].completed;

      // cambiabamos el estado de todos 
      // setItem(newItem); 

      // llamamos a la funcion encargada de actualizar el estado de los TODO's y guardarlo en el LocalStorage
      saveTodos(newItem);
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // eliminar Todo's - esta función elimina de manera permanente un TODO, ya sea tildado como completo o no

    // recibimos el index para compararlo y ver cual cumple la condicion, para pasarlo a completo/incompleto
    const deleteTodo = (index) => {
      // guardamos el indice de la coincidencia, entre el index que nos llega y el del array
      const todoIndex = todos.findIndex(todo => todo.index === index);
      console.log(todoIndex);
      // // clonamos en un nuevo array los todos
      const newItem = [...todos];
      // eliminamos el elemento 
      newItem.splice(todoIndex,1);

      // cambiabamos el estado de todos 
      // setItem(newItem); 
      
      // llamamos a la funcion encargada de actualizar el estado de los TODO's y guardarlo en el LocalStorage
      saveTodos(newItem);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

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