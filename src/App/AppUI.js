import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({ totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, toggleCompleteTodo, deleteTodo }) {

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
{/* 
            {loading && <p> estamos cargando la pagina </p> }
            { (!loading && !searchedTodos.lenght) && <p>crea tu primer Todo </p>} */}

                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.index}
                        number={todo.index}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => toggleCompleteTodo(todo.index)}
                        onDelete={() => deleteTodo(todo.index)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };