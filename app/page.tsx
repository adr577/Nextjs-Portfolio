import Image from "next/image";
import  Hero  from "./components/Hero"
import  AboutSection  from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    
    <main className='min-h-screen container mx-auto px-12 py-4 '>
        <Hero />
        <AboutSection />
        <ProjectsSection />

        
      </main>

  
  
  );
}
