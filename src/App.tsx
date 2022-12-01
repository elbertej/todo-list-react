import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

import './styles/global.css';

export interface ITask {
  id: string;
  content: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask(taskContent: string) {
    setTasks([
      ...tasks, {
        id: uuidv4(),
        content: taskContent,
        isDone: false
      }
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id != taskId);

    setTasks(newTasks);
  }

  function toggleTaskDoneById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if(task.id == taskId){
        return {
          ...task,
          isDone: !task.isDone,
        };
      }
      return task;
    })

    setTasks(newTasks);

  }

  return (
    <>
      <Header onAddTask={addTask}/>
      
      <Tasks tasks={tasks} onDelete={deleteTaskById} onComplete={toggleTaskDoneById}/>
    </>
  )
}

export default App
