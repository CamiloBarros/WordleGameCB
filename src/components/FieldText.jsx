import React from 'react'

const FieldText = ({ onTyped, onEnter, text, stateGame }) => {
  const stateInput = stateGame === 'Lose' || stateGame === 'Win'
  const placeHolder = {
    Win: 'You Win',
    Lose: 'You Lost',
    Playing: 'type your word...'
  }

  return (
    <input type="text" name="word" className='focus:outline-none border-b-2 border-stone-500 w-full mb-4 text-center text-stone-300 placeholder:text-stone-500 focus:placeholder:text-transparent bg-transparent' placeholder={placeHolder[stateGame]} onChange={onTyped} onKeyPress={onEnter} maxLength='5' value={text} readOnly={stateInput} autoFocus />
  )
}

export default FieldText