// React
import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App () {
  const [taskItems, setTaskItems] = useState([
    { name: 'mi primer tarea', done: false },
    { name: 'mi segunda tarea', done: true },
    { name: 'mi tercer tarea', done: false }
  ])

  const createNewTask = (taskName) => {
    const val = taskItems.find((task) => task.name === taskName)
    if (!val) {
      const newTask = { name: taskName, done: false }
      setTaskItems((actualTasks) => [...actualTasks, newTask])
    }
  }
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
