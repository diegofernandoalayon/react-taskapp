function VisibilityControl ({ setShowCompleted, cleanTask }) {
  const handleDelete = () => {
    console.log('handleDelete')
    if (window.confirm('Are you sure you want to delete it?')) {
      cleanTask()
      setShowCompleted(false)
    }
  }
  return (
    <>
      <div>
        <label>
          <input type='checkbox' onChange={() => setShowCompleted(a => !a)} />
          Show Tasks Done
        </label>
        <button onClick={handleDelete}>Clear</button>
      </div>
    </>

  )
}

export default VisibilityControl
