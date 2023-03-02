import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from "../TodoForm";
import { Modal } from '../Modal';
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";

// importamos el TodoContext para usar el Consumer
import { TodoContext } from "../TodoContext";

import "./App.css";

function AppUI() {

    const {
        loading,
        error,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        completedTodos,
        openModal, 
        setOpenModal,
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
                            
                            {loading && <TodoLoading/>}
                            {(error && <TodoError/>) && !<TodoLoading/>}
                            {(loading && !error) &&
                                searchedTodos.map((todo) => (
                                    <TodoItem
                                        key={todo.text}                                       
                                        text={todo.text}
                                        completed={todo.completed}
                                        onComplete={() => toggleCompleteTodo(todo.text)}
                                        onDelete={() => deleteTodo(todo.text)}
                                    />
                                ))
                            }
                            { (!loading && completedTodos) ? <p className="TodoCompleted">Tienes Todos para eliminar</p> : <p></p>}  
                      </TodoList>
                
                {
                    !!openModal && (
                        <Modal>
                           <TodoForm/>
                        </Modal>
                    )
                }
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };