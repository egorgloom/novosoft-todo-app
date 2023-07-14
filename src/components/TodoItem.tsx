import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useActions } from './../hooks/useActions';
import { ITodo } from './../types/todo.types';

interface ITodoItem {
    todo: ITodo
}

const TodoItem: FC<ITodoItem> = ({todo}) => {
    const id = todo.id;
    const title = todo.title
    const {toggleTaskComplete, updateTask, deleteTask} = useActions()
  return (
    <div className="todo">
    <p className={`${todo.completed ? 'completed' : ''}`}
    onClick={() => toggleTaskComplete( todo.id )}>{todo.title}</p>
    <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => updateTask( {id, title} )} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask( todo.id )} />
    </div>
</div>
  );
};

export default TodoItem;