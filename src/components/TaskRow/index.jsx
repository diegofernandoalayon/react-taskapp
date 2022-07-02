function TaskRow ({ taskItem, toggleTask, index }) {
  const COLORS = ['bg-slate-200','bg-slate-500']
  return (
    <>
      <tr>
        <td className={`${index%2?COLORS[0]:COLORS[1]} bg-opacity-30 text-white`}>
          <input
            type='checkbox'
            checked={taskItem.done}
            onChange={() => toggleTask(taskItem)}
            />
            <span className="px-10">
              {taskItem.name}
            </span>
        </td>

      </tr>
    </>
  )
}

export default TaskRow
