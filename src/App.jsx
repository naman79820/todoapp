import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/content'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-fit w-screen bg-violet-200 pb-10'>
  <Navbar/>
  <Content/>
  </div>
    </>
  )
}

export default App
