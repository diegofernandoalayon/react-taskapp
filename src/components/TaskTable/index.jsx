import TaskRow from '../TaskRow'

export default function TaskTable ({ taskItems, toggleTask, showCompleted = false }) {
  const taskTableRows = (doneValue) => {
    return (
      taskItems
        .filter(task => task.done === doneValue)
        .map((task, index) => (
          <TaskRow
            key={task.name}
            taskItem={task}
            toggleTask={toggleTask}
            index={index}
          />
        ))
    )
  }
  return (
    <>
      <table className='w-full'>
        <thead className='bg-emerald-600 text-white'>
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
