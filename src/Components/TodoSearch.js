import React from 'react';
import '../Styles/TodoSearch.css';
import { TodoContext } from '../TodoContext';

const TodoSearch = () => {
    const { searchValue, setSearchValue } =React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input  className="TodoSearch" 
                placeholder="Search a specific task" 
                value={searchValue}
                onChange={onSearchValueChange}
                />
    );
}

export {TodoSearch};
