import React from "react";
import AddToDo from "./AddToDo";
import FilterTodo from "./FilterTodo";
import ToDoItem from "./ToDoItem";
import { toDoItems } from "./toDoItems";
import './style.css';

const ToDo = () => {
  return (
    <>
      <h2 className="heading">Todo List</h2>
      <AddToDo />
      <FilterTodo />

      <div>
        <h3>3 tasks</h3>
        <ul>
          {toDoItems.map((task) => (
            <ToDoItem name={task.name} completed={task.completed} key={task.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDo;
