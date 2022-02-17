import React from 'react'
import Box from './Box'

const RowCurrent = ({ word }) => {
  return (
    <div className='flex'>
      {
        word.split('').map( (letter, index) => {
          return <Box key={index} letter={letter} state='transparent' />
        })
      }
      {
        Array.from(Array(5 - word.length )).map( (_, index) => {
          return <Box key={index} letter='' state='transparent' />
        })
      }
    </div>
  )
}

export default RowCurrent