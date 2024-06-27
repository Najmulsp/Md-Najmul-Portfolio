
import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import ContactMe from './components/ContactMe'
import Experience from './components/Experience'
import Footer from './components/Footer'
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
    <Experience></Experience>
    <ContactMe></ContactMe>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App
