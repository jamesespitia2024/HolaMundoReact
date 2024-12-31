import { useState } from 'react'
import './App.css'
import NavigationBar from './Componets/navbar'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-red-800'>

      <NavigationBar></NavigationBar>
    </div>
  )
}

export default App
