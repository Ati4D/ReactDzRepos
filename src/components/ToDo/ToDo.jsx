import React, { useReducer, useState } from "react";
import AddToDo from "./AddToDo";
import FilterTodo from "./FilterTodo";
import ToDoItem from "./ToDoItem";
import { toDoItems } from "./toDoItems";
import './style.css';
import tasksReducer from "./ToDoReducer";


const ToDo = () => {
  const [taskList, dispatch] = useReducer(tasksReducer,toDoItems);
  const [filter, setFilter] = useState("All");

  const addTask = (name) => {
    dispatch({
      type: 'added', 
      name
    });
  }
  const toggleTaskCompleted = (id) => { 
    dispatch({
      type: 'toggletaskcompleted', 
      id
    });
  }
  const deleteTask = (id) => { 
    dispatch({
      type: 'delete', 
      id
    });
  }
  const editTask = (id, name)=>
  {
    dispatch({
      type: 'edit', 
      name,
      id
    });
  }

  const filter_map = {
    All:()=>true,
    Active: (task)=>!task.completed,
    Completed: (task)=>task.completed
  };

  const tasksWord = taskList.length === 1 ? 'task' : 'tasks';
  const taskHeading = `${taskList.length} ${tasksWord}`;

  return (
    <>
      <h2 className="heading">Todo List</h2>
      <AddToDo addTask={addTask} />
      <FilterTodo 
      filter_map={filter_map} 
      filter={filter}
      setFilter={setFilter}
      />

      <div>
        <h3>{taskHeading}</h3>
        <ul>
          {taskList.filter(filter_map[filter]).map((task) => (
            <ToDoItem
              task={task}
              toggleTaskCompleted={toggleTaskCompleted}
              deleteTask={deleteTask}
              editTask={editTask}
              key={task.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDo;