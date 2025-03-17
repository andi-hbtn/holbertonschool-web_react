import { useState } from 'react'
import hbtlogo from "../src/assets/holberton-logo.jpg";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div className='App-header'>
      <img src={hbtlogo} alt='holberton logo'/>
      <h1 style={{color:"#e1003c"}}>School dashboard</h1>
    </div>
    <div className='App-body'>
      <p>Login to access the full dashboard</p>
    </div>
    <div className='App-footer'>
      <p>
        Copyright the current year e.g: 2025 - holberton School
      </p>
    </div>
   </>
  )
}

export default App
