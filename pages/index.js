import Loader from '../components/Loader'
import About from '../components/about'
import Education from '../components/education'
import Experiences from '../components/experiences'
import Intro from '../components/intro'
import Skills from '../components/skills'
import Work from '../components/work'
import { myWorks } from '../utils/SwrFetcher'


export default function Home() {
  const works = myWorks()
  if (!works) return <Loader/> 

  return (
    
    <div className="master_div">

      <main className="w-screen overflow-hidden bg-gray-900 main-container">
        <article id="intro" className="w-11/12 h-screen m-auto">
          <Intro />

        </article>

        <article id="about" className="w-11/12 h-screen m-auto">
          <About />
        </article>

        <article id="skills" className="w-11/12 h-screen m-auto">
          <Skills />
        </article>

        <div id="projects"></div>
      {
          works.map((work) => {
            
            return <Work key={work.id} {...work}/>
          })
        }

        <article id="exeperiences" className="w-11/12 h-screen m-auto">
          <Experiences />
        </article>

        <article id="education" className="w-11/12 h-screen m-auto">
          <Education />
        </article>
      </main>
    </div>
  
  )
}
