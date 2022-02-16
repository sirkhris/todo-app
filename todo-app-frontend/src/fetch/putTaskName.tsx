export async function putTaskName(id: string, name: string) {
  await fetch('http://localhost:3500/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, name }),
  });
}
