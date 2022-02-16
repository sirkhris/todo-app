import type {Task} from "../App";

export async function getTasks() {
  return await fetch('http://localhost:3500/').then((response) => 
    response.json()
  ).then((json) => json.data as Task[]);
  // .then((json) => console.log(json));
}