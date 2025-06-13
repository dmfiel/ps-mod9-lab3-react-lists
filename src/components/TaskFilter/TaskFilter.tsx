import type { Priority, TaskFilterProps, TaskStatus } from '../../types';

// This component provides an interface for the use to show parts of the task list
// based on filtering by status or priority. These choices are passed by to the
// TaskList parent component to update the display.

export function TaskFilter({ onFilterChange }: TaskFilterProps) {
  return (
    <div className="flex gap-5 p-5 bg-green-50 border rounded-lg w-fit mx-auto">
      <div>
        <label
          htmlFor="status-filter"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Status
        </label>
        <select
          onChange={e =>
            onFilterChange({ status: e.target.value as TaskStatus })
          }
          id="status-filter"
          className="bg-white dark:bg-gray-800 px-2 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 hover:ring-blue-500"
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="priority-filter"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Priority
        </label>
        <select
          onChange={e =>
            onFilterChange({ priority: e.target.value as Priority })
          }
          id="priority-filter"
          className="bg-white dark:bg-gray-800 px-2 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="all">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
    </div>
  );
}
