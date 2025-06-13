import { useState } from 'react';
import { TaskFilter } from '../TaskFilter/TaskFilter';
import { TaskItem } from '../TaskItem/TaskItem';
import type { Filters, TaskListProps } from '../../types';

// This component shows a list of tasks passed down from its parent which also handles
// the list updates. Task items are shown when they are not deleted and meet the criteria
// specified by the TaskFilter component.

export function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  function onFilterChange({ status, priority }: Filters) {
    console.log(status, priority);
    if (status) setStatusFilter(status);
    if (priority) setPriorityFilter(priority);
  }

  return (
    <main className="max-w-[1000px] mx-auto flex flex-col gap-5 p-5">
      <h1 className=" w-fit mx-auto">Task List</h1>
      <TaskFilter onFilterChange={onFilterChange} />
      {!tasks || !tasks.length
        ? ''
        : tasks.map(
            task =>
              task.status !== 'deleted' &&
              (statusFilter === 'all' || statusFilter === task.status) &&
              (priorityFilter === 'all' ||
                priorityFilter === task.priority) && (
                <TaskItem
                  key={task.id}
                  task={task}
                  onStatusChange={onStatusChange}
                  onDelete={onDelete}
                />
              )
          )}
    </main>
  );
}
