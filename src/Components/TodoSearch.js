import React from 'react';
import '../Styles/TodoSearch.css';

const TodoSearch = ({searchValue, setSearchValue}) => {

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
