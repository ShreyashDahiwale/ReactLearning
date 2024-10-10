import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})


// Store is known as Single Source of Truth