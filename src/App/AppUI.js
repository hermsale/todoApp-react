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
          
            <TodoCounter
            />

            <TodoSearch            
            />
            
                      <TodoList>
                            
                            {loading && <TodoLoading/>}
                            {error && <TodoError/>}
                            {(!loading && searchedTodos.length === 0) && <p className="TodoCompleted">¡Crea tu primer Todo!</p>}

                                {searchedTodos.map((todo) => (
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
                
                {/* solo si se hace click en el boton, aparecera el TodoForm */}
                {
                    !!openModal && (
                        <Modal>
                           <TodoForm/>
                        </Modal>
                    )
                }

                {/* verificamos que haya finalizado el loading y que no haya errores para que aparezca el boton */}
                {
                    (!error && !loading) && 
                    
                    <CreateTodoButton 
                    setOpenModal={setOpenModal}
                    />
                }
        </React.Fragment>
    );
}

export { AppUI };