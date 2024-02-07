import { useState } from 'react'
import EditTask from './EditTask'

function Task({id, description, isDone}) {
  const [isEditing, setIsEditing] = useState(false)
  
  const onTaskEdited = () => setIsEditing(true)
  const falsifyEdit = () => setIsEditing(false)
  return (
    <div>
    { isEditing ? <EditTask id={id} description={description} isDone={isDone} falsifyEdit={falsifyEdit}/> : 
      <div className='task__container'>
          <h3 className='task__description'>{description}</h3>
          <div className='flex'>
            <div className={isDone ? "checkIsDoneGreen" : "checkIsDoneYellow"}><p>{isDone ? "Completed" : "Not Done"}</p></div>
            <button type="button" onClick={onTaskEdited} className='edit__btn'>
              <img src="edit.svg" alt="edit icon" className='edit__btn__img'/>
            </button>
          </div>
      </div>
    }
    </div>
  )
}

export default Task