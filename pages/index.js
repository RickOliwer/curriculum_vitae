import About from '../components/about'
import Education from '../components/education'
import Experiences from '../components/experiences'
import Intro from '../components/Intro'
import Skills from '../components/skills'
import Work from '../components/work'
import { myWorks } from '../utils/SwrFetcher'

export default function Home() {
  // const getData = (url) => {
  //   const { data: response, error } = useSWR(url, Fetcher)

  //   if (error) return <div>Failed to load</div>
  //   if (response) return response
  // }

  // const works = getData('/api/getWork')
  // const about = getData('/api/getAbout')
  // const skills = getData('/api/getSkills')
  // const education = getData('/api/getEducation')
  // const experiences = getData('/api/getExperiences')
  
  // if (!(works && about && skills && education && experiences)) return <div>Loading...</div>
  const works = myWorks()
  if (!works) return <div>Loading</div>


  return (
    
    <main className="w-screen bg-gray-900">
      <article className="w-11/12 bg-red-900 m-auto h-screen">
        <Intro />

      </article>

      <article className="w-11/12 bg-red-900 m-auto h-screen">
        <About />
      </article>

      <article className="w-11/12 bg-red-900 m-auto h-screen">
        <Skills />
      </article>

     {
        works.map((work) => {
          
          return <article key={work.id} className="article w-11/12 m-auto h-screen"><Work {...work}/></article>
        })
      }

      <article className="w-11/12 bg-red-900 m-auto h-screen">
        <Experiences />
      </article>

      <article className="w-11/12 bg-red-900 m-auto h-screen">
        <Education />
      </article>
    </main>
  
  )
}
