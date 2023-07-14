import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import EditTaskForm from './components/EditTaskForm';
import { useSelector } from 'react-redux';
import { ITodo } from './types/todo.types';
import { StoreState } from './redux/store';

function App() {
  const [value, setValue] = useState<string>('');
  const tasksList = useSelector((state: StoreState) => state);

  return (
    <div className="todoWrapper">
      <TodoForm value={value} setValue={setValue} />

      {tasksList.task.map((todo: ITodo) => (
        todo.isEditing ?
          <EditTaskForm todo={todo} key={todo.id} />
          :
          <TodoItem
            key={todo.id}
            todo={todo}
          />
      ))}
    </div>
  );
}

export default App;
