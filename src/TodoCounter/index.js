import React from 'react';
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

// destructuramos el objeto props y solo tomamos lo que queramos
function TodoCounter () {

    const {
        completedTodos:completed,
        totalTodos:total,
    } = React.useContext(TodoContext)

    return(
        <h2 className='TodoCounter'> Has completado {completed} de {total} TODO's</h2>
    );
}

// exportacion por encapsulamiento 
export {TodoCounter};