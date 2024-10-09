import React from 'react'
import {useState, useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    // dispatch use the reducer to store the value in Store
    const [input, setInput] = useState('')
    const dispatch = useDispatch();
    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('')
    }
    return (
      <div></div>  
    )
}

export default AddTodo