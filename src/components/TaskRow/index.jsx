function TaskRow ({ taskItem, toggleTask }) {
  return (
    <>
      <tr>
        <td>
          {taskItem.name}
          <input
            type='checkbox'
            checked={taskItem.done}
            onChange={() => toggleTask(taskItem)}
          />
        </td>

      </tr>
    </>
  )
}

export default TaskRow
