import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/content'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-screen h-screen  bg-violet-200 overflow-x-hidden'>
  <Navbar/>
  <Content/>
  </div>
    </>
  )
}

export default App
