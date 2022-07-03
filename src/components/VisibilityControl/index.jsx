
function VisibilityControl ({ setShowCompleted, showCompleted, cleanTask }) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete it?')) {
      cleanTask()
      setShowCompleted(false)
    }
  }
  return (
    <>
      <div className='bg-gray-400 flex items-center justify-evenly py-2'>
          
            <label className='bg-gray-100 cursor-pointer relative w-10 h-5 rounded-full' >
              <input 
                  type='checkbox' 
                  checked={showCompleted}
                  onChange={() => setShowCompleted(a => !a)} 
                  className='sr-only peer'
              />
              <span className='w-2/5 h-4/5 bg-blue-300 absolute rounded-full left-1 top-0.5 peer-checked:bg-blue-500 peer-checked:left-5 transition-all duration-500'></span>
            </label>
          <strong className='px-10 text-white'>Show Tasks Done</strong>
        <button className="bg-[#FF0000] hover:bg-red-600 text-white rounded-md px-2" onClick={handleDelete}>Clear</button>
      </div>
    </>

  )
}

export default VisibilityControl
