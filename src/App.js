import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HeroSection from './pages/HeroSection'
import ExperienceSection from './pages/ExperienceSection'
import ContactSection from './pages/ContactSection'
import ProjectSection from './pages/ProjectSection'
import AboutSection from './pages/AboutSection'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<HeroSection/>}/>
      <Route path='/services' element={<ExperienceSection/>}/>
      <Route path='/contact' element={<ContactSection/>}/>
      <Route path='/about' element={<AboutSection/>}/>
      <Route path='/projects' element={<ProjectSection/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
