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
  },
  {
    id: '1',
    title: 'Design landing page',
    description:
      'Create the initial wireframe and mockups for the landing page.',
    status: 'pending',
    priority: 'high',
    dueDate: '2025-06-20'
  },
  {
    id: '2',
    title: 'Set up CI/CD pipeline',
    description:
      'Configure GitHub Actions for automated testing and deployment.',
    status: 'pending',
    priority: 'medium',
    dueDate: '2025-06-18'
  },
  {
    id: '3',
    title: 'Fix login bug',
    description:
      "Resolve the issue where users can't log in with Google OAuth.",
    status: 'in-progress',
    priority: 'high',
    dueDate: '2025-06-14'
  },
  {
    id: '4',
    title: 'Write unit tests',
    description: 'Add coverage for the user service module.',
    status: 'in-progress',
    priority: 'low',
    dueDate: '2025-06-22'
  },
  {
    id: '5',
    title: 'Deploy to staging',
    description: 'Push the latest build to the staging environment for QA.',
    status: 'completed',
    priority: 'medium',
    dueDate: '2025-06-10'
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
