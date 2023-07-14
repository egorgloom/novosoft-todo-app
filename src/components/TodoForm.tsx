import React, { FC } from 'react';
import { useActions } from './../hooks/useActions';

interface ITodoForm {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
}

const TodoForm: FC<ITodoForm> = ({ value, setValue }) => {
  const { addTask } = useActions();

  const checkTask = () => {
    if (value.trim().length === 0) {
      alert('add task')
      setValue('')
    } else {
      addTask({ title: value })
      setValue('')
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    checkTask()
  }
  
  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <label>
        <input
          className="todo-input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button type='submit' className='todo-btn'>Add</button>
    </form>
  );
};

export default TodoForm;