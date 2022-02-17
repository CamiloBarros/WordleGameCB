import React from 'react'


const Box = ({ letter, state }) => {
  
  const states = {
    correct: 'bg-green-700 text-white',
    present: 'bg-sky-700 text-white',
    none: 'bg-red-500/70 text-white',
    empty: 'bg-white',
    transparent: 'bg-transparent text-white'
  }
  const bg = states[state]

  return (
    <div className={`border-2 mx-2 my-1 h-10 w-10 flex items-center justify-center ${bg}`}>{letter}</div>
  )
}

export default Box