import React from 'react';
import '../Styles/TodoSearch.css';

const TodoSearch = () => {

    const [searchValue, setSearchValue] = React.useState('');

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div>
            <input  className="TodoSearch" 
                    placeholder="Search a specific task" 
                    value={searchValue}
                    onChange={onSearchValueChange}
                    />
                    <p>{searchValue}</p>
        </div>
        
    );
}

export {TodoSearch};
