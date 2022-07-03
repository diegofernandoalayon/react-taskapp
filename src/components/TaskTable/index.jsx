import TaskRow from '../TaskRow'

export default function TaskTable ({ title, taskItems, toggleTask, showCompleted = false }) {
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
        <thead className='bg-orange-200 text-black'>
          <tr>
            <th>{title}</th>
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
