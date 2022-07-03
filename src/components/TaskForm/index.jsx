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
    <div className=" bg-slate-300 bg-opacity-30 rounded-t-md">
      <form 
        onSubmit={handleSubmit} 
        className=" w-auto flex flex-row p-4 justify-center gap-2" 
      >

        <input 
          className='rounded-l-md p-2 text-lg w-full  text-midnight   ' 
          type='text' placeholder='Enter a new task' 
          onChange={handleChange} 
          value={newTaskName} 
        />
        <button 
          className='bg-blue-600 px-2 hover:bg-blue-400 text-white rounded-r-md'
        >
        Save Task
        </button>
      </form>
    </div>
  )
}
