import { useState, useRef } from 'react';
import { getTasks } from '../fetch/getTasks';
import { putTaskName } from '../fetch/putTaskName';
import { putTaskStatus } from '../fetch/putTaskStatus';
import { deleteTask } from '../fetch/deleteTask';
import type { Task } from '../App';

interface TodoProps extends Task {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function Todo({
  id,
  name,
  completed,
  tasks,
  setTasks,
}: TodoProps) {
  const [isEditing, setEditing] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState<boolean>(completed);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewName(e.target.value);
  }
  //update query
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await putTaskName(id, newName);

    setNewName('');
    setEditing(false);

    setTasks(await getTasks());
  }

  async function handleStatus() {
    await putTaskStatus(id, !isCompleted);
    setIsCompleted((prev) => !prev);

    setTasks(await getTasks());
  }

  const editingTemplate = (
    <form className='stack-small' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label className='todo-label' htmlFor={id}>
          New name for {name}
        </label>
        <input
          className='todo-text'
          type='text'
          id={id}
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className='btn-group'>
        <button
          type='button'
          className='btn todo-cancel'
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className='visually-hidden'>renaming {name}</span>
        </button>
        <button type='submit' className='btn btn__primary todo-edit'>
          Save
          <span className='visually-hidden'>new name for {name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className='stack-small'>
      <div className='c-cb'>
        <input
          id={id}
          type='checkbox'
          defaultChecked={completed}
          onChange={handleStatus}
        />
        <label className='todo-label' htmlFor={id}>
          {name}
        </label>
      </div>
      <div className='btn-group'>
        <button type='button' className='btn' onClick={() => setEditing(true)}>
          Edit <span className='visually-hidden'>{name}</span>
        </button>
        <button
          type='button'
          className='btn btn__danger'
          onClick={() => deleteTask(id, tasks, setTasks)}
        >
          Delete <span className='visually-hidden'>{name}</span>
        </button>
      </div>
    </div>
  );

  return <li className='todo'>{isEditing ? editingTemplate : viewTemplate}</li>;
}
