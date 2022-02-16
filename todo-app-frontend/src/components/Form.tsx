import { useState } from 'react';
import { addTask } from '../fetch/addTask';
import type { Task } from '../App';

interface FormProp {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function Form({ tasks, setTasks }: FormProp) {
  const [name, setName] = useState('');

  function isEmpty(): boolean {
    return name.length ? true : false;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isEmpty()) {
      setTasks([...tasks, await addTask(name)]);
      setName('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='label-wrapper'>
        <label htmlFor='new-todo-input' className='label__lg'>
          What needs to be done?
        </label>
      </h2>
      <input
        type='text'
        id='new-todo-input'
        className='input input__lg'
        name='text'
        autoComplete='off'
        value={name}
        onChange={handleChange}
      />
      <button type='submit' className='btn btn__primary btn__lg'>
        Add
      </button>
    </form>
  );
}

export default Form;
