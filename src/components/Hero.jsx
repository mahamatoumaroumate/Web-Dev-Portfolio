import { FaGithubSquare, FaTwitter } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io5'
import { FaSquareXTwitter } from 'react-icons/fa6'
import img from '../assets/hero.svg'
export const Hero = () => {
  return (
    <div className='bg-emerald-100  py-24  '>
      <section className='align-element grid md:grid-cols-2 items-center'>
        <section>
          <h1 className='font-bold text-5xl font-sans tracking-wide py-2'>
            I'm Mahamat
          </h1>
          <h2 className='font-normal text-2xl py-1'>Front-End Developer</h2>
          <h4 className='text-lg text-slate-700 py-1 mt-2'>
            Turning Ideas Into Interactive Reality
          </h4>
          <section className='mt-6 flex gap-4'>
            <a href='https://github.com/mahamatoumaroumate?'>
              <FaGithubSquare className='text-4xl text-slate-500 hover:text-slate-900 duration-300' />
            </a>
            <a href='https://www.linkedin.com'>
              <IoLogoLinkedin className='text-4xl text-slate-500 hover:text-slate-900 duration-300' />
            </a>
            <a href='https://twitter.com'>
              <FaSquareXTwitter className='text-4xl text-slate-500 hover:text-slate-900 duration-300' />
            </a>
          </section>
        </section>
        <section className=' hidden md:block'>
          <img src={img} alt='logo' className='h-80 lg:h-96' />
        </section>
      </section>
    </div>
  )
}
