import React from 'react'

const SectionTitle = ({ text }) => {
  return (
    <div className='border-b pb-2 mb-4 text-slate-900 font-bold'>
      <h1 className='text-3xl tracking-wide'>{text}</h1>
    </div>
  )
}

export default SectionTitle
