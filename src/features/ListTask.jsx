import { useSelector } from "react-redux"
import Task from "./Task"

function ListTask({ completedClicked }) {
    const taskz = useSelector(state => state.tasks)

    const renderedTasks = taskz.map(task => {
        return <Task key={task.id} id={task.id} description={task.description} isDone={task.isDone}/>
    })

    const completedTasks = taskz.filter(task => {
        if(task.isDone) return task
    })

    const completedTasksTransform = completedTasks.map(task => {
        return <Task key={task.id} id={task.id} description={task.description} isDone={task.isDone}/>
    })

    return (
    <div className="task__list">
        {completedClicked && completedTasksTransform.length > 1 ? completedTasksTransform : completedClicked && completedTasksTransform.length == 0 ? <h3>No Completed Task Yet!</h3> : renderedTasks}
    </div>
  )
}

export default ListTask