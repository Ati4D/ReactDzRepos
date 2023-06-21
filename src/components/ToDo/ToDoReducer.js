import { v4 as uuidv4 } from "uuid";


const tasksReducer = (taskList, action) => {
    switch (action.type) {
        case 'added':
            let newTask = {
                id: uuidv4(),
                name: action.name,
                completed: false,
              };
        return[...taskList, newTask];

        case 'delete':
            taskList = taskList.filter(task => task.id !== action.id)
        return[...taskList];

        case 'edit':
            taskList = taskList.map((task) => {
                if(task.id === action.id)
                {
                  return {...task, name: action.name}
          
                }
                return task;
              });
        return[...taskList];

        case 'toggletaskcompleted':
                taskList = taskList.map(task => {
                if (task.id === action.id) {
                  return { ...task, completed: !task.completed }
                }
                return task;
              });
            
        return[...taskList];
    
        default:
            break;
    }

}

export default tasksReducer;