import React from 'react'

const FieldText = ({ onTyped, onEnter, text }) => {
  return (
    <input type="text" name="word" className='focus:outline-none border-b-2 w-full mb-4 text-center text-gray-600 focus:placeholder:text-transparent' placeholder='type your word...' onChange={onTyped} onKeyPress={onEnter} maxLength='5' value={text} />
  )
}

export default FieldText