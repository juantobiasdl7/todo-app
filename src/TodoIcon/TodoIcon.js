import React from 'react';
import { ReactComponent as Check } from './checked.svg';
import { ReactComponent as Cross } from './crossed.svg';
import './TodoIcon.css';

const TodoIcon = ({type, color = 'gray', onClick}) => {

    const iconTypes = {
        "check": color => (
            <Check className="Icon-svg Icon-svg--check" fill={color}/>
        ),
        "delete": color => (
            <Cross className="Icon-svg Icon-svg--delete" fill={color}/>
        ),
    };

    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export {TodoIcon};
