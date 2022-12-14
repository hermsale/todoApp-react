import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  // react Hooks
  const [searchValue, setSearchValue] = React.useState('');

  // tomamos por parametro el objeto event de los cambios del input 
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return [
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      // tomamos todos los cambios en el input
      onChange={onSearchValueChange}
    />,
    <p>{searchValue}</p>
  ];
}

export { TodoSearch };
