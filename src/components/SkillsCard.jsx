import { skills } from '../data'
export const SkillsCard = () => {
  return (
    <section className='grid gap-16 md:grid-cols-2 xl:grid-cols-3'>
      {skills.map((skill) => {
        const { id, title, icon, text } = skill
        return (
          <div key={id}>
            <h2>{icon}</h2>
            <h3 className='my-6 text-sl font-bold '>{title}</h3>
            <p className='text-lg  text-slate-700 tracking-wide'>{text}</p>
          </div>
        )
      })}
    </section>
  )
}
