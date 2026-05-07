import { useState } from 'react'

import './App.css'
import { Navbar } from './components/Navbar'
import { Menu } from './components/Menu'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Menu/> 
      <About/>
      <Contact/>
      <Footer/>  
    </>
  )
}

export default App
