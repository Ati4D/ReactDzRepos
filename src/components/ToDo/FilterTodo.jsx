import React from 'react';

const FilterTodo = () => {

  const hello = (e) => {
    //alert('hello')
    console.log(e.target);
  };


  return (
    <div>
      <button onClick={() => { alert('Hello') }}>Show All</button>
      <button onClick={hello}>Show active</button>
      <button onClick={hello}>Show completed</button>
    </div>
  );
}

export default FilterTodo;
