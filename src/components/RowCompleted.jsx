import React from 'react'
import Box from './Box'

const RowCompleted = ({ word, solution }) => {
  
  const checkWord = ( letter, index ) => {
    if(solution.includes(letter)){
      if(solution[index] === letter) {
        return 'correct'
      }
      return 'present'
    }
    else {
      return 'none'
    }
  }

  return (
    <div className='flex'>
      {
        Array.from(Array(5)).map((_, index) => {
          return <Box key={index} letter={word[index]} state={checkWord(word[index], index)} />
        })
      }
    </div>
  )
}

export default RowCompleted