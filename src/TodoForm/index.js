import React from 'react';
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm(){

    const
        {
            addTodo, 
            setOpenModal,
        } = React.useContext(TodoContext);

    // aqui guardaremos los cambios que haya en el textArea que es lo que enviaremos a la funcion que guardará el Todo
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        // console.log(event.target.value);
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Agrega tu nuevo Todo's</label>
            <textarea
                placeholder='Agregar un Todo'
                value={newTodoValue}
                onChange={onChange}
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type="button"
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    onClick={onSubmit}
                    type="submit"
                    className='TodoForm-button TodoForm-button--add'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm};