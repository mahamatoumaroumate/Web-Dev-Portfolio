import { FaGithubSquare, FaTwitter } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { projects } from '../data'

export const ProjectCard = () => {
  return (
    <div className='py-20 grid md:grid-cols-2 gap-8 xl:grid-cols-3 '>
      {projects.map((project) => {
        const { id, img, url, github, title, text } = project
        return (
          <section
            key={id}
            className='shadow hover:shadow-lg duration-300 rounded-lg overflow-hidden'
          >
            <img src={img} alt={title} className='w-full h-64 object-cover ' />
            <div className='bg-white py-6 px-8 '>
              <h1 className='capitalize font-bold text-xl tracking-wide py-2'>
                {title}
              </h1>
              <p className='text-lg  text-slate-700 tracking-wide'>{text}</p>
              <div className='flex gap-2 py-4 '>
                <a href={url}>
                  <TbWorldWww className='text-4xl text-slate-500 hover:text-slate-900 duration-300' />
                </a>
                <a href={github}>
                  <FaGithubSquare className='text-4xl text-slate-500 hover:text-slate-900 duration-300' />
                </a>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
