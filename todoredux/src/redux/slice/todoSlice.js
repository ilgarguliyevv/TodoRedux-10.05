

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        // editTask: (state, action) => {
        //     const index = state.findIndex(item => item.id === action.payload.id);
        //     const updatedState = [...state];
        //     return void (updatedState[index].name = action.payload.name);
        // },
        // editTodo: (state, action) => {
        //     let { todoList } = state;
        //     state.todoList = todoList.map((item) =>
        //         item.id === action.payload.id ? action.payload : item);
        // },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            state.todos = state.todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            );
        },

    },
});
export const { addTodo, toggleComplete, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;