import React from   'react';
import './TodoItem.css'
import { FaCheck, FaHotjar } from "react-icons/fa";

function TodoItem(props){
    // console.log(props);
    return (
        <li className='TodoItem'>      
            <span className={`Icon Icon__check ${props.completed && 'Icon__check-active'}`}><FaCheck /></span>
            <p className={`TodoItem__p ${props.completed && 'TodoItem__p-completed'}`}>{props.text}</p>
            <span className='Icon Icon__delete'><FaHotjar/></span>
        </li>
    );
}

export {TodoItem};