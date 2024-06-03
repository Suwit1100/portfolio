import { useState } from 'react'
import "./App.scss"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container bg-danger">
        <input type="text" className='form-control' placeholder='adsa' />
      </div>
    </>
  )
}

export default App
