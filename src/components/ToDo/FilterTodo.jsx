import React, {useState} from 'react';
import FilterButton from './FilterButton';

const FilterTodo = ({filter_map, filter, setFilter}) => {
  const filter_names = Object.keys(filter_map);
  const [selectedBtn, setSelectedBtn] = useState(filter_names[0]);

  return (
    <div>
      {filter_names.map(name => <FilterButton name={name} setFilter={setFilter} key={name} setBtn={setSelectedBtn} selectedBtn={selectedBtn}/>)}
    </div>
  );
}

export default FilterTodo;
