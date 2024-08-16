import Image from "next/image";
import  Hero  from "./components/Hero"
import  AboutSection  from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import Navbar from './components/Navbar'
import Certificates from "./components/Certificates";
export default function Home() {
  return (
    
    <main className='min-h-screen container mx-auto px-12 py-4 '>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <Certificates />

        
      </main>

  
  
  );
}
