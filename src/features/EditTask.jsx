import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { taskUpdated } from './taskSlice'

function EditTask({ id, description, isDone, falsifyEdit}) {
    const [newDescription, setNewDescription] = useState(description)
    const [newIsDone, setNewIsDone] = useState(isDone)

    const dispatch = useDispatch()

    const handleTextChange = e => setNewDescription(e.target.value)
    const handleCheckboxChange = e => setNewIsDone(e.target.checked)
    
    const onSaveTaskClicked = () => {
        if(newDescription) {
            dispatch(taskUpdated({id: id, description: newDescription, isDone: newIsDone}))
            falsifyEdit()
        }
    }
  
    return (
    <div>
        <form className='task__container'>
        <div className='flex'>
            <input type="checkbox" name="isDone" checked={newIsDone} onChange={handleCheckboxChange} className="edit__checkbox"/>
            <label htmlFor="taskDescription" hidden>Task Description:</label>
            <input
                type='text' 
                name="description"
                value={newDescription}
                onChange={handleTextChange}
                className='edit__input'
            />
        </div>
            <button type="button" onClick={onSaveTaskClicked} className='save__btn'>
                <img src="save.svg" alt="save icon" className='save__btn__img'/>
            </button>
        </form>
    </div>
  )
}

export default EditTask