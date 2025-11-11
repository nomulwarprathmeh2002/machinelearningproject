import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-red-500 text-blue-500">
        <h1 className="text-5xl font-bold">Tailwind is Working 🎉</h1>
        <p className="mt-4 text-lg">Background: Red | Font: Blue</p>
      </div>
    </>
  )
}

export default App
