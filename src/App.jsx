import react from "react"
import './App.css'
import { Navbar } from './components/Navbar.jsx'
import { Menu } from './components/Menu.jsx'
import { About } from './components/About.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { Hero } from './components/Hero.jsx'


/* import Cart from './components/Cart' */
function App() {

  return (
    <div className='wrapper'>
<Navbar/>
      <Hero />
      <Menu />
      <About/>
      <Contact/>
      <Footer/>  
    
    </div>
      
  )
}

export default App
