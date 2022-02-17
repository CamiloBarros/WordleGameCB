import React from 'react'

const Title = ({ state }) => {
  const stateTitle = {
    Win: 'text-green-600 animate-bounce',
    Lose: 'text-red-600',
    Playing: 'text-stone-200'
  }
  return (
    <h1 className={`text-5xl sm:text-6xl font-bold text-center ${stateTitle[state]} w-48 lg:mt-10`}>
      Wordle Game
    </h1>
  )
}

export default Title
