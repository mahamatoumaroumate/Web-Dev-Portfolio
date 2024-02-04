import img from '../assets/about.svg'
import SectionTitle from './SectionTitle'
export const About = () => {
  return (
    <div className='bg-white py-24' id='about'>
      <div className='align-element  grid md:grid-cols-2 gap-6'>
        <img src={img} alt='about' className='h-64 w-full' />
        <section>
          <SectionTitle text={'Code And Coffee'} />
          <p className='py-8 text-lg text-slate-600 -tracking-wide'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </section>
      </div>
    </div>
  )
}
