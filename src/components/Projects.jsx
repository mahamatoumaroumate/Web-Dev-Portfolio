import { ProjectCard } from './ProjectCard'
import SectionTitle from './SectionTitle'

export const Projects = () => {
  return (
    <div className='align-element py-16' id='projects'>
      <SectionTitle text={'Web Creations'} />
      <ProjectCard />
    </div>
  )
}
