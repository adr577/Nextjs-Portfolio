import Image from "next/image";
import  Hero  from "./components/Hero"
import  AboutSection  from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    
      <div className='container mx-auto px-12 py-4 '>
        <Hero />
        <AboutSection />
        <ProjectsSection />

        
      </div>

  
  
  );
}
