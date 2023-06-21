import React from 'react';
import classNames from 'classnames';

const FilterButton = ({name, setFilter, setBtn, selectedBtn}) => {
    return (
        <button className={classNames({selected:(selectedBtn === name)})} onClick={()=>{setFilter(name); setBtn(name)}}>
            Show {name} tasks
        </button>
    );
}

export default FilterButton;
