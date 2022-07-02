function VisibilityControl ({ setShowCompleted, cleanTask }) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete it?')) {
      cleanTask()
      setShowCompleted(false)
    }
  }
  return (
    <>
      <div className='bg-gray-400 flex justify-evenly py-2'>
        <label>
          <input type='checkbox' onChange={() => setShowCompleted(a => !a)} />
          Show Tasks Done
        </label>
        <button className="bg-[#FF0000] hover:bg-red-600 text-white rounded-md px-2" onClick={handleDelete}>Clear</button>
      </div>
    </>

  )
}

export default VisibilityControl
