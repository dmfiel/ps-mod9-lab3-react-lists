# Task List

This project demonstrates a task management system build with React, TypeScript, and Tailwind. Users can update the task status and delete unneeded tasks. The task display can be filtered to show a specific status and/or priority.

- The App component provides sample data and update handling functions to the task components. In a real-world situation this data would be stored in a database, or at least local storage for permanence and portability.

- The TaskList component shows a list of tasks passed down from its parent which also handles the list updates. Task items are shown when they are not deleted and meet the criteria specified by the TaskFilter component.

- The TaskFilter component provides an interface for the use to show parts of the task list based on filtering by status or priority. These choices are passed by to the TaskList parent component to update the display.

- The TaskItem component renders an individual task. The status and priority are shown with responsive colors to quickly highlight the top items to the user. Interactive controls are available for the user to change task status or delete unneeded items.
