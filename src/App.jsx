
import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
 

  return (
    < >
    <div className='border max-w-screen-xl h-screen  mx-auto'>
    <Navbar></Navbar>
    <Banner></Banner>
    <About></About>
    <Projects></Projects>
    </div>
    </>
  )
}

export default App
