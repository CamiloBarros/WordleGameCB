import React from 'react'

const Button = ({ stateGame, onClick }) => {
  return (
    <button className='text-white border border-white rounded-lg px-3 py-2 hover:bg-white hover:text-stone-900 hover:px-4 hover:py-3 ease-in-out duration-300' onClick={onClick}>Restart</button>
  )
}

export default Button