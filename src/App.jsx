import { useState } from 'react'
import ListTask from './features/ListTask'
import AddTask from './features/AddTask'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

function App() {
  const [taskClicked, setTaskClicked] = useState(true)
    const [completedClicked, setCompletedClicked] = useState(false)

    const handleTaskClick = () => {
        setCompletedClicked(false)
        setTaskClicked(true)
    }
    const handleCompletedClick = () => {
        setTaskClicked(false)
        setCompletedClicked(true)
    }

  return (
    <>
      <NavBar />
      <div className='main'>
        <SideBar taskClicked={taskClicked} completedClicked={completedClicked} handleTaskClick={handleTaskClick} handleCompletedClick={handleCompletedClick}/>
        <div>
          <AddTask />
          <ListTask completedClicked={completedClicked}/>
        </div>
      </div>
    </>
  )
}

export default App