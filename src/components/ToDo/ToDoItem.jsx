import React, { useState } from 'react';
import classNames from 'classnames';
import EditToDo from './EditToDo';

const ToDoItem = ({ task, toggleTaskCompleted, deleteTask, editTask }) => {
  return (
    <li>
      <div>
        <input type="checkbox" defaultChecked={task.completed}
          onChange={() => { toggleTaskCompleted(task.id) }} />
        <span className={classNames({ complete: task.completed })} >
          {task.name}</span>
        <div>
          <EditToDo Name={task.name} editTask={editTask} taskId={task.id} />
          <button onClick={() => { deleteTask(task.id) }}>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default ToDoItem;
