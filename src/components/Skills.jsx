import React from 'react'
import SectionTitle from './SectionTitle'

import { SkillsCard } from './SkillsCard'
const Skills = () => {
  return (
    <div className='align-element pt-6 mb-16' id='skills'>
      <SectionTitle text={'Tech Stack'} />
      <SkillsCard />
    </div>
  )
}

export default Skills
