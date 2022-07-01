import TaskRow from '../../TaskRow'

export default function TaskTable ({ taskItems, toggleTask, showCompleted = false }) {
  const taskTableRows = (doneValue) => {
    return (
      taskItems
        .filter(task => task.done === doneValue)
        .map(task => (
          <TaskRow
            key={task.name}
            taskItem={task}
            toggleTask={toggleTask}
          />
        ))
    )
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {
            taskTableRows(showCompleted)
          }
        </tbody>
      </table>
    </>
  )
}
