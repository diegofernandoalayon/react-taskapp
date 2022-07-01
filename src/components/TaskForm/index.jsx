import { useState } from 'react'

export default function TaskForm ({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState('')

  const handleChange = (e) => {
    const { value } = e.target
    setNewTaskName(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createNewTask(newTaskName)
    setNewTaskName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter a new task' onChange={handleChange} value={newTaskName} />
      <button>Save Task</button>
      <h1>{newTaskName}</h1>
    </form>
  )
}
