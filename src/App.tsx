import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='font-primary-playfair'>Vite + React</h1>
      <div className="card bg-heath-950">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card bg-tuna-900">
        Texto
      </div>
      <p className="read-the-docs bg-grandis-300 font-secondary-alike">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs bg-harvest-gold-400">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
