import { links } from '../data'

export const Navbar = () => {
  return (
    <nav className='bg-emerald-100'>
      <div className='align-element   flex flex-col gap-4 py-8 sm:flex-row sm:items-center  '>
        <h2 className='font-bold text-3xl '>
          Web<span className='text-emerald-600'>Dev</span>
        </h2>
        <div className='capitalize sm:px-14'>
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                href={href}
                key={id}
                className='px-2 text-xl hover:text-emerald-600 duration-300'
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
