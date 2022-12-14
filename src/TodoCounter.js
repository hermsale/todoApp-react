import React from 'react';
import './TodoCounter.css';

// destructuramos el objeto props y solo tomamos lo que queramos
function TodoCounter ({total, completed}) {
    return(
        <h2 className='TodoCounter'> Has completado {completed} de {total} TODO's</h2>
    );
}

// exportacion por encapsulamiento 
export {TodoCounter};