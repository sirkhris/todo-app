import type { Task } from '../App';

export async function deleteTask(
  id: string,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) {
  await fetch('http://localhost:3500/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  setTasks(tasks.filter((task) => id !== task.id));
}
