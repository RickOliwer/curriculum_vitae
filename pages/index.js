import { useState, useEffect, useRef } from 'react'
import About from '../components/about'
import Education from '../components/education'
import Experiences from '../components/experiences'
import Intro from '../components/Intro'
import Skills from '../components/skills'
import Work from '../components/work'
import { myWorks } from '../utils/SwrFetcher'

export default function Home() {
  const works = myWorks()
  if (!works) return <div>Loading</div>

  return (
    
    <main className="w-screen overflow-hidden bg-gray-900 main-container">
      <article className="w-11/12 m-auto h-screen">
        <Intro />

      </article>

      <article className="w-11/12 m-auto h-screen">
        <About />
      </article>

      <article className="w-11/12 m-auto h-screen">
        <Skills />
      </article>

     {
        works.map((work) => {
          
          return <Work key={work.id} {...work}/>
        })
      }

      <article className="w-11/12 m-auto h-screen">
        <Experiences />
      </article>

      <article className="w-11/12 m-auto h-screen">
        <Education />
      </article>
    </main>
  
  )
}
