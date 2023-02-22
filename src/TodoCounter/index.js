import React from 'react';
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";


function TodoCounter () {

    // Uso de useContext
    // const {
    //     completedTodos:completed,
    //     totalTodos:total,
    // } = React.useContext(TodoContext)

    return(
        // Opcion de uso de la etiqueta Consumer
        <TodoContext.Consumer>
            {value =>(
                <h2 className='TodoCounter'> Has completado {value.completedTodos} de {value.totalTodos} TODO's</h2>
            )
            }
        </TodoContext.Consumer>
    );
}

// exportacion por encapsulamiento 
export {TodoCounter};