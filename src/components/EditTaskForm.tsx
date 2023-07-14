import React, { FC, useState } from 'react';
import { useActions } from './../hooks/useActions';
import { ITodo } from './../types/todo.types';

interface IEditTaskForm {
  todo: ITodo
}

const EditTaskForm: FC<IEditTaskForm> = ({ todo }) => {
  const [editValue, setEditValue] = useState<string>(`${todo.title}`);
  const { updateTask } = useActions();
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (editValue.trim().length === 0) {
      setEditValue(`${todo.title}`)
    } else {
      updateTask({ id: todo.id, title: editValue })
    }
  }
  return (
    <form onSubmit={handleSubmit} className="editTaskForm">
      <label>
        <textarea
          className="todo-input"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      </label>
      <button type='submit' className='todo-btn' >Add</button>
    </form>
  );
};

export default EditTaskForm;