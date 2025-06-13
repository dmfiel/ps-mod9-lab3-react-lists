import './App.css';
import { useState } from 'react';
import { TaskList } from './components/TaskList/TaskList';
import type { Task, TaskStatus } from './types';

// This App component provides sample data and update handling functions to
// the task components. In a real-world situation this data would be stored
// in a database, or at least local storage for permanence and portability.

const tasksDefault: Task[] = [
  {
    id: '123',
    title: 'Get Up',
    description: 'Get out of bed.',
    status: 'completed',
    priority: 'high',
    dueDate: '6/13/2025'
  },
  {
    id: '1234',
    title: 'Eat Lunch',
    description: 'Make a sandwich and consume.',
    status: 'in-progress',
    priority: 'low',
    dueDate: '11/13/2025'
  },
  {
    id: '12345',
    title: 'Friday!',
    description: 'Have a beer.',
    status: 'pending',
    priority: 'medium',
    dueDate: '11/13/2025'
  }
];

function App() {
  const [tasks, setTasks] = useState(tasksDefault);

  function onStatusChange(taskId: string, newStatus: TaskStatus): void {
    const newTasks = new Array(...tasks);
    const task = newTasks.find(task => task.id === taskId);
    if (task) {
      task.status = newStatus;
    }
    setTasks(newTasks);
  }

  function onDelete(taskId: string): void {
    const newTasks = new Array(...tasks);
    const task = newTasks.find(task => task.id === taskId);
    if (task) {
      task.status = 'deleted';
    }
    setTasks(newTasks);
  }

  return (
    <TaskList
      tasks={tasks}
      onStatusChange={onStatusChange}
      onDelete={onDelete}
    />
  );
}

export default App;
