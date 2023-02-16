import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import "./App.css";

function AppUI({ totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, toggleCompleteTodo, deleteTodo, loading }) {

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

            {loading && <p className="TodoLoading"> Estamos cargando los Todo's </p> }
           

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
            { (!loading && completedTodos) ? <p className="TodoCompleted">Tienes Todo's para eliminar</p> : <p></p>}
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };