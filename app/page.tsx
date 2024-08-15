import Image from "next/image";
import  Hero  from "./components/Hero"
import  AboutSection  from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'


export default function Home() {
  return (
    <main className="min-h-screen flex-col flex p-2">
      <div className='container mx-auto px-12 py-4'>
        <Hero />
        <AboutSection />
        <ProjectsSection />

        
        {/* <Hero />
        <About />
        <RecentProjects /> */}
      </div>

  
    </main>
  );
}
