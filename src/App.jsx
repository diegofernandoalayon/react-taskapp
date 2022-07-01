// React
import { useState, useEffect } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskTable from './components/TaskTable'
import VisibilityControl from './components/VisibilityControl'

function App () {
  const [taskItems, setTaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  const createNewTask = (taskName) => {
    const val = taskItems.find((task) => task.name === taskName)
    if (!val) {
      const newTask = { name: taskName, done: false }
      setTaskItems((actualTasks) => [...actualTasks, newTask])
    }
  }
  const toggleTask = (task) => {
    console.log(task.name)
    setTaskItems(
      taskItems.map(t => (t.name === task.name) ? { ...t, done: !t.done } : t)
    )
  }
  const cleanTask = () => {
    setTaskItems(taskItems.filter(task => !task.done))
  }

  // inicializar estado
  useEffect(() => {
    const data = window.localStorage.getItem('taskItems')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  // guardar datos en localStorage
  useEffect(() => {
    window.localStorage.setItem('taskItems', JSON.stringify(taskItems))
  }, [taskItems])

  return (
    <div className='bg-background'>
      <TaskForm
        createNewTask={createNewTask}
      />
      <TaskTable
        taskItems={taskItems}
        toggleTask={toggleTask}
      />
      <VisibilityControl
        setShowCompleted={setShowCompleted}
        cleanTask={cleanTask}
      />
      {
        showCompleted && <TaskTable
          taskItems={taskItems}
          toggleTask={toggleTask}
          showCompleted
                         />
      }
    </div>
  )
}

export default App
