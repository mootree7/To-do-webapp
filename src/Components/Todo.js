import React , {useState} from 'react'
import TodoForm from './TodoForm'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {MdModeEdit} from 'react-icons/md'
import {MdOutlineCancel} from 'react-icons/md'

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {

    const [edit, setEdit] = useState({id: null, value: ''})

    const submitEdit = value => {updateTodo(edit.id, value); setEdit({id: null, value : ''})}

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit = {submitEdit}/>
    }

    return todos.map((todo , index)  => (

        <div className={todo.isComplete? "todo-row complete" : "todo-row"} key={index}>

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>

            <div className= "icons">

                <AiOutlineCheckCircle onClick = {() => completeTodo(todo.id)} className="done-icon"/>
                <MdOutlineCancel onClick={() => removeTodo(todo.id)} className="delete-icon" />
                <MdModeEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon" />

            </div>
        
        </div>


    )
    )
}

export default Todo
