import React, { useState } from "react";
import AddToDo from "./AddToDo";
import FilterTodo from "./FilterTodo";
import ToDoItem from "./ToDoItem";
import { toDoItems } from "./toDoItems";
import { v4 as uuidv4 } from "uuid";
import './style.css';


const ToDo = () => {
  const [taskList, setTaskList] = useState(toDoItems);


  const addTask = (name) => {
    let newTask = {
      id: uuidv4(),
      name,
      completed: false,
    };
    setTaskList([...taskList, newTask]);
  }

  const toggleTaskCompleted = (id) => { 
    const updatedTasks = taskList.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
      
    setTaskList(updatedTasks);
  }

  const deleteTask = (id) => { 
    setTaskList(taskList.filter(task => task.id !== id));
  }

  const tasksWord = taskList.length === 1 ? 'task' : 'tasks';
  const taskHeading = `${taskList.length} ${tasksWord}`;

  return (
    <>
      <h2 className="heading">Todo List</h2>
      <AddToDo addTask={addTask} />
      <FilterTodo />

      <div>
        <h3>{taskHeading}</h3>
        <ul>
          {taskList.map((task) => (
            <ToDoItem
              task={task}
              toggleTaskCompleted={toggleTaskCompleted}
              deleteTask={deleteTask}
              key={task.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDo;