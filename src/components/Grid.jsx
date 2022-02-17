import React from 'react'
import RowCompleted from '../components/RowCompleted'
import RowCurrent from '../components/RowCurrent'
import RowEmpty from '../components/RowEmpty'

const Grid = ({ wordSelected, wordCompleted, word, turns }) => {
  return (
    <>
      {wordCompleted.map((word, index) => {
        return <RowCompleted key={index} word={word} solution={wordSelected} />
      })}

      {turns > 6 ? null : <RowCurrent word={word} />}
      {turns > 6
        ? null
        : Array.from(Array(6 - turns)).map((_, index) => {
            return <RowEmpty key={index} />
          })}
    </>
  )
}

export default Grid
