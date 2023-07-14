import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from './../types/todo.types';


const initialState: ITodo[] = []

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, {payload: task}: PayloadAction<ITodo>) => {
            const newTask = {
                id: uuidv4(),
                title: task.title,
                completed: false,
                isEditing: false,
            }
            state.push(newTask)
        },
        deleteTask: (state, {payload: task}: PayloadAction<string | undefined>) => {
            const index = state.findIndex((todo) => todo.id === task);
            state.splice(index, 1);
        },
        toggleTaskComplete: (state, {payload: task}: PayloadAction<string | undefined>) => {
            const toggleTodo = state.find(todo => todo.id === task);
            if (toggleTodo) {
                toggleTodo.completed = !toggleTodo.completed
            }
        },
        updateTask: (state, {payload: task}: PayloadAction<ITodo>) => {
            state.map(todo => {
                if (todo.id === task.id) {
                    todo.isEditing = !todo.isEditing;
                    todo.title = task.title;
                }
                return todo
            })
        }
    }
})

export const {actions, reducer} = taskSlice;