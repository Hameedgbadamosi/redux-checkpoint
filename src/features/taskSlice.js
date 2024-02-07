import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, description: 'Do Your Checkpoints', isDone: false},
    {id: 2, description: 'Get a Girlfriend', isDone: false},
]

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        taskAdded(state, action) {
            state.push(action.payload)
        },
        taskUpdated(state, action) {
            const { id, description, isDone } = action.payload
            const existingTask = state.find(task => task.id === id)
            if(existingTask) {
                existingTask.description = description
                existingTask.isDone = isDone
            }
        }
    }
})

export const { taskAdded, taskUpdated } = taskSlice.actions

export default taskSlice.reducer