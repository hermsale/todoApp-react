import React from   'react';
import './TodoItem.css'

function TodoItem(props){
    // console.log(props);
    return (
        <li className='TodoItem'>
            <span className={`Icon Icon__check ${props.completed && 'Icon__check-active'}`}>√</span>
            <p>{props.number}</p>
            <p className='TodoItem__p'>{props.text}</p>        
            <p>{props.genero}</p>
            <span>X</span>
        </li>
    );
}

export {TodoItem};