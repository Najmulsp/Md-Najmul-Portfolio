
import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import ContactMe from './components/ContactMe'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
 

  return (
    < >
    <div className='border max-w-screen-xl h-screen  mx-auto'>
    <Navbar></Navbar>
    <Banner></Banner>
    <Skills></Skills>
    <About></About>
    <Projects></Projects>
    <Experience></Experience>
    <ContactMe></ContactMe>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App
