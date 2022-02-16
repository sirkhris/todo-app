import type { Task } from '../App';

export async function addTask(name: string) {
  return await fetch('http://localhost:3500/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      completed: false,
    }),
  })
    .then((response) => response.json())
    .then((json) => json.data as Task);
}
