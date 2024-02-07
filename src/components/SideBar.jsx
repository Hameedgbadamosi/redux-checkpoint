import { useState } from 'react'

function SideBar({ taskClicked, completedClicked, handleTaskClick, handleCompletedClick}) {
    

  return (
    <div className='sidebar'>
        <div className={taskClicked ? "tasks__active tasks" : "tasks"} onClick={handleTaskClick}>
            <img src='task.png' alt='tasks icon' className='task__icon'/>
            <h4>Tasks</h4>
        </div>
        <div className={completedClicked ? "tasks__active tasks" : "tasks"} onClick={handleCompletedClick}>
            <img src='checked.png' alt='tasks icon' className='completed__icon'/>
            <h4>Completed</h4>
        </div>
    </div>
  )
}

export default SideBar