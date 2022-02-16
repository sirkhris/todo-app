export async function putTaskStatus(id: string, completed: boolean) {
  await fetch('http://localhost:3500/status/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, completed }),
  });
}
