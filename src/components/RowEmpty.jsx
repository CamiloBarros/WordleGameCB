import React from 'react'
import Box from './Box'

const RowEmpty = () => {
  return (
    <div className='flex'>
      {
        Array.from(Array(5)).map( (_,index) => {
          return <Box key={index} letter='' state='empty' />
        })
      }
    </div>
  )
}

export default RowEmpty
