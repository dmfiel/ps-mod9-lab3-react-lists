1. How did you ensure unique keys for your list items?

To ensure unique keys, I used the id field from the tasks list. In a real-world situation, this id would normally be assigned by the database or generated as a GUID to ensure uniqueness.

2. What considerations did you make when implementing the filtering functionality?

Filtering was done at the task list level, so that only the items matching the criteria are shown in the list of items.

3. How did you handle state updates for task status changes?

Status changes trigger a handler at the App level, which finds the correct task in the list and updates the status. This is done by changing the tasks list which is monitored with a useState hook to trigger UI updates.

4. What challenges did you face when implementing conditional rendering?

The hardest part with conditional rendering is getting the syntax correct when mixing HTML and JavaScript in the JSX return values. Plus the variance between JSX and HTML (e.g., className vs. class) takes a bit to become comforable.
