import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import FilterButton from './components/FilterButtons';
import Form from './components/Form';
//API//
import { getTasks } from './fetch/getTasks';
//////

////TYPING////
export interface Task {
  id: string;
  name: string;
  completed: boolean;
}

const FILTER_MAP: any = {
  All: () => true,
  Active: (task: Task) => !task.completed,
  Completed: (task: Task) => task.completed,
};

const FILTER_NAMES: any = Object.keys(FILTER_MAP);
////////////

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<any>('All');

  useEffect(function () {
    (async () => setTasks(await getTasks()))();
  }, []);

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        key={task.id}
        id={task.id}
        name={task.name}
        completed={task.completed}
        tasks={tasks}
        setTasks={setTasks}
      />
    ));
  const filterList = FILTER_NAMES.map((name: any) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const headingText = `${taskList.length} tasks remaining`;

  return (
    <div className='todoapp stack-large'>
      <h1>My To-Do List</h1>
      <Form tasks={tasks} setTasks={setTasks} />
      <div className='filters btn-group stack-exception'>{filterList}</div>
      <h2 id='list-heading'>{headingText}</h2>
      <ul
        className='todo-list stack-large stack-exception'
        aria-labelledby='list-heading'
      >
        {taskList}
      </ul>
    </div>
  );
}
