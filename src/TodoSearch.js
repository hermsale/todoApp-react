import React from "react";
import './TodoSearch.css'

function TodoSearch (){
    // creamos un const para guardar el estado
    const estado = React.useState();

    const onSearchValueChange = (event) =>{
       console.log(event.target.value);
    }

    return (
        <input 
            className="TodoSearch"
            placeholder='Cebolla'
            onChange={onSearchValueChange}
        />
     
    )

}

export {TodoSearch};