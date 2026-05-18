
import './App.css'
import { Navbar } from './components/Navbar'
import { Menu } from './components/Menu'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import Hero from './components/Hero'
import Cart from './components/Cart'
function App() {

  return (
    <>
      <Navbar/>
      <Hero />
      <Menu />
      <Cart /> 
      <About/>
      <Contact/>
      <Footer/>  
    </>
  )
}

export default App
