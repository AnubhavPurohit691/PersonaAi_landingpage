import React from 'react'
const paragraph = [
    {
        id:1,
        title:"Real-Time Collaboration",
        description:"Technology is most powerful when it fades into the background and enables people to think more clearly, act faster, and build with confidence. Well-designed systems prioritize"
    },
    {
        id:2,
        title:"Task & Project Tracking",
        description:"reliability, simplicity, and scalability, allowing teams to focus on solving real problems instead of fighting infrastructure. Over time, small engineering decisions compound,"
    },
    {
        id:3,
        title:"Performance Insights",
        description:"shaping not just performance, but developer experience and long-term maintainability. If you want a specific tone or purpose (technical, poetic, professional bio"
    }
]

const TextsAfterHero = () => {
  return (
    <div className='max-w-6xl mx-auto px-6 py-20'>
      <div className='flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0'>
        {paragraph.map((p) => {
          return (
            <div 
              key={p.id} 
              className='flex-1 flex flex-col items-center text-center px-6 md:border-r border-gray-200 last:border-r-0'
            >
              <h3 className='font-bold text-lg mb-3 text-gray-900'>{p.title}</h3>
              <p className='text-gray-600 leading-relaxed text-sm'>{p.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TextsAfterHero 
