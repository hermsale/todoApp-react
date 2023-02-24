import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

// importamos el TodoContext para usar el Consumer
import { TodoContext } from "../TodoContext";

import "./App.css";

function AppUI() {

    const {
        loading,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        completedTodos
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            {/* le pasamos al componente encargado de tomar el control de Todo's los valores */}

            <TodoCounter
            />

            {/* pasamos por props el estado  */}
            <TodoSearch            
            />
            {/* podemos hacer uso en TodoList de la propiedad children, ya que  hicimos apertura y cierre del componente */}
                      <TodoList>
                            {loading && <p className="TodoLoading"> Estamos cargando los Todo's </p> }
                                {searchedTodos.map((todo) => (
                                    <TodoItem
                                        key={todo.index}                                       
                                        text={todo.text}
                                        completed={todo.completed}
                                        onComplete={() => toggleCompleteTodo(todo.index)}
                                        onDelete={() => deleteTodo(todo.index)}
                                    />
                                ))}
                            { (!loading && completedTodos) ? <p className="TodoCompleted">Tienes Todos para eliminar</p> : <p></p>}  
                      </TodoList>
                    
                <Modal>
                    <p>{searchedTodos[0]?.text}</p>
                </Modal>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };