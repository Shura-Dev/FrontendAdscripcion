import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Students from './Components/Students'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
      <Students />
      </header>
    </div>
  )
}

export default App
