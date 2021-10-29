import { useState, useEffect, useRef } from 'react'
import About from '../components/about'
import Education from '../components/education'
import Experiences from '../components/experiences'
import Intro from '../components/Intro'
import Skills from '../components/skills'
import Work from '../components/work'
import { myWorks } from '../utils/SwrFetcher'
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Home() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const works = myWorks()
  if (!works) return <div className="bg-gray-900 loader"><div className=""><PacmanLoader  color={color} loading={loading} size={50} /></div></div>

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
