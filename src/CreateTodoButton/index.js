import React from 'react';
import './CreateTodoButton.css' ;



function CreateTodoButton() {
    // funcion para crear un Todo / recibe un argumento con texto 
    const onClickButton = (msg) => {
        alert(msg);
    };

    // enviamos los parametros para la funcion 
    return (
        <button className='CreateTodoButton'  onClick = { () => onClickButton('Esto crea un TODO')}>+</button>
        )
    };

export {CreateTodoButton};