import React from   'react';

function TodoItem(props){
    console.log(props);
    return (
        <li>
            <span>C</span>
            <p>{props.number}</p>
            <p>{props.text}</p>        
            <p>{props.completed}</p>
            <p>{props.genero}</p>
            <span>X</span>
        </li>
    );
}

export {TodoItem};