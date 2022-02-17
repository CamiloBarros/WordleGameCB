import React from 'react'


const Box = ({ letter, state }) => {
  
  const states = {
    correct: 'bg-green-500 text-white',
    present: 'bg-orange-500 text-white',
    none: 'bg-gray-500 text-white',
    empty: 'bg-white'
  }
  const bg = states[state]

  return (
    <div className={`border-2 mx-2 my-1 h-10 w-10 flex items-center justify-center ${bg}`}>{letter}</div>
  )
}

export default Box