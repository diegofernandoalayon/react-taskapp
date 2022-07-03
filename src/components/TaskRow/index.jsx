

function TaskRow ({ taskItem, toggleTask, index }) {
  const COLORS = ['bg-slate-200','bg-slate-500']
  return (
    <>
      <tr>
        <td className={`${index%2?COLORS[0]:COLORS[1]} bg-opacity-30 text-white`}>
          <label className='px-2'>

            <input
              type='checkbox'
              checked={taskItem.done}
              onChange={() => toggleTask(taskItem)}
            />
            <span className={`px-10 text-lg ${taskItem.done && 'line-through'}`}>
              {taskItem.name}
            </span>
          </label>
        </td>

      </tr>
    </>
  )
}

export default TaskRow
