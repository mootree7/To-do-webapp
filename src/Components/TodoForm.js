import React, {useState, useEffect, useRef} from 'react'

const TodoForm = props => {

    const[input, setInput] = useState(props.edit? props.edit.value : '');

    const focusTarget = useRef(null)

    useEffect(() => {
        focusTarget.current.focus()
    })
    
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')

    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (
        <form className = "todo-form" onSubmit = {handleSubmit}>
        {props.edit ? 
        (
        <>
        <input
        type = "text"
        placeholder = "Edit your task"
        value = {input}
        name = "text"
        className = "todo-input edit"
        onChange = {handleChange}
        ref = {focusTarget}
        />
        <button className = "todo-button">
        Update
        </button></>) : 
        (
        <>
        <input
        type = "text"
        placeholder = "Add a task"
        value = {input}
        name = "text"
        className = "todo-input"
        onChange = {handleChange}
        ref = {focusTarget}
        />
        <button className = "todo-button">
        Add
        </button>
        </>)
        }
        </form>
    )
}

export default TodoForm
