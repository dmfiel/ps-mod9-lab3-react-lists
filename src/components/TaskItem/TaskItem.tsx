import type { TaskItemProps, TaskStatus } from '../../types';

// This component renders an individual task. The status and priority are shown with
// responsive colors to quickly highlight the top items to the user. Interactive controls
// are available for the user to change task status or delete unneeded items.

export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-black dark:border-gray-700">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-gray-600">{task.description}</p>
        </div>
        <div className="flex gap-2">
          <select
            value={task.status}
            onChange={e =>
              onStatusChange(task.id, e.target.value as TaskStatus)
            }
            className={`px-2 py-1 border border-white hover:border-black focus:border-black rounded mx-2 ${
              task.status === 'pending'
                ? 'bg-yellow-50 text-yellow-700'
                : task.status === 'in-progress'
                ? 'bg-green-50 text-green-700'
                : 'bg-blue-50 text-blue-700'
            }`}
          >
            <option value="pending" className="bg-yellow-50 text-yellow-700">
              Pending
            </option>
            <option value="in-progress" className="bg-green-50 text-green-700">
              In Progress
            </option>
            <option value="completed" className="bg-blue-50 text-blue-700">
              Completed
            </option>
          </select>
          <button
            className="text-red-500 hover:text-red-700 hover:bg-red-50 focus:bg-red-50 px-3 rounded"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="mt-2 flex gap-5 text-sm">
        <span
          className={`${
            task.priority === 'low'
              ? 'text-green-500'
              : task.priority === 'medium'
              ? 'text-yellow-500'
              : 'text-red-500'
          }`}
        >
          Priority: {task.priority}
        </span>
        <span className="text-gray-500">Due: {task.dueDate}</span>
      </div>
    </div>
  );
}
