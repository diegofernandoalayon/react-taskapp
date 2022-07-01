// React
import { useState, useEffect } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App () {
  const [taskItems, setTaskItems] = useState([])

  const createNewTask = (taskName) => {
    const val = taskItems.find((task) => task.name === taskName)
    if (!val) {
      const newTask = { name: taskName, done: false }
      setTaskItems((actualTasks) => [...actualTasks, newTask])
    }
  }
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
    <div className='App'>
      <TaskForm createNewTask={createNewTask} />
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {
            taskItems.map((taskItem, index) => (
              <tr key={taskItem.name + index}>
                <td>
                  {taskItem.name}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
