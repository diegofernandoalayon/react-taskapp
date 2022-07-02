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
    <div className="flex bg-slate-300 bg-opacity-30 max-w-md rounded-md">
      <form onSubmit={handleSubmit} className=" flex flex-row gap-2 p-10" >
      <input className='rounded-l-md p-2 text-lg' type='text' placeholder='Enter a new task' onChange={handleChange} value={newTaskName} />
      <button className='bg-blue-600 px-2 hover:bg-blue-400 text-white rounded-r-md '>Save Task</button>
    </form>
    </div>
  )
}
