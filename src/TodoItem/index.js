import React from "react";
import "./TodoItem.css";
import { FaCheck, FaHotjar } from "react-icons/fa";

function TodoItem(props) {
  // const onComplete = () =>{
  //     alert ('Completaste el TODO '+props.text);
  //     // props.text;
  // }

  //   const onDelete = () => {
  //     alert("Borraste el TODO " + props.text);
  //   };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon__check ${
          props.completed && "Icon__check-active"
        }`}
        onClick={props.onComplete}
      >
        <FaCheck />
      </span>
      <p
        className={`TodoItem__p ${props.completed && "TodoItem__p-completed"}`}
      >
        {props.text}
      </p>
      <span className="Icon Icon__delete" onClick={props.onDelete}>
        <FaHotjar />
      </span>
    </li>
  );
}

export { TodoItem };
