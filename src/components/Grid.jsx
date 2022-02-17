import React from 'react'
import RowCompleted from '../components/RowCompleted'
import RowCurrent from '../components/RowCurrent'
import RowEmpty from '../components/RowEmpty'

const Grid = ({ wordSelected, wordCompleted, word, turns }) => {
  return (
    <div className='border-2 border-dashed border-stone-100/40 p-4'>
      {wordCompleted.map((word, index) => {
        return <RowCompleted key={index} word={word} solution={wordSelected} />
      })}

      {turns > 6 ? null : <RowCurrent word={word} />}
      {turns > 6
        ? null
        : Array.from(Array(6 - turns)).map((_, index) => {
            return <RowEmpty key={index} />
          })}
    </div>
  )
}

export default Grid
