import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { taskAdded } from './taskSlice'

function AddTask() {
    const [description, setDescription] = useState('')
    const [typing, setTyping] = useState('')

    const dispatch = useDispatch()

    const onDescriptionChanged = e => {
        setDescription(e.target.value)
        setTyping(e.target.value)
    }
  
    const onSaveTaskClicked = () => {
        if(description) {
            dispatch(
                taskAdded({
                    id: nanoid(),
                    description,
                    isDone: false
                })
            )

            setDescription('')
            setTyping('')
        }
    }


    return (
    <section>
        <form className='add__task__form'>
            <label htmlFor="taskDescription" hidden>Task Description:</label>

            <input
                type="text"
                name="description"
                value={description}
                onChange={onDescriptionChanged}
                placeholder='Enter Your Task'
            />
            <button type="button" onClick={onSaveTaskClicked}
            className={typing ? "add__btn__active" : "add__btn__inactive"}>+</button>
             
        </form>
    </section>
  )
}

export default AddTask