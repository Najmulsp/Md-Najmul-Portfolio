
import './App.css';
// import About from './components/About'
import Banner from './components/Banner';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
 

  return (
    < >
    <div className=' max-w-screen-xl h-screen  mx-auto'>
    <Navbar></Navbar>
    <Banner></Banner>
    <Skills></Skills>
    <Projects></Projects>
    <ContactMe></ContactMe>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App
