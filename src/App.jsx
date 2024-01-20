import { useState } from 'react'

function App() {
  const [count, setCount] = useState(10)

  return (
      <div className='bg-white'>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
  )
}

export default App;
