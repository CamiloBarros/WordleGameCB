import { useState } from 'react'
import FieldText from './components/FieldText'
import RowCompleted from './components/RowCompleted'
import RowCurrent from './components/RowCurrent'
import RowEmpty from './components/RowEmpty'

function App() {
  const [word, setWord] = useState('')
  const [wordCompleted, setWordCompleted] = useState([])
  const [turns, setTurns] = useState(1)

  const handleInput = (event) => {
    const {value} = event.target
    setWord(value)
  }

  const handleKey = (event) => {
    if(event.key === 'Enter') {
      if(word.length === 5) {
        
        setWordCompleted([
          ...wordCompleted,
          word
        ])
        
        setWord('')
        setTurns(turns + 1)
      }
    }
  }

  return (
    <div className='border flex flex-col justify-between items-center max-w-md mx-auto h-screen p-8'>
      <h1 className='text-5xl font-bold'>Wordle Game</h1>
      <div>
        <FieldText onTyped={handleInput} onEnter={handleKey} text={word} />
        {
          wordCompleted.map( (word, index) => {
            return <RowCompleted key={index} word={word} solution='break' />
          })
        }
        
        <RowCurrent word={word} />
        {
          Array.from(Array(6 - turns)).map( (_,index) => {
            return <RowEmpty key={index} />

          } )
        }
      </div>
      <h2 className='font-semibold text-lg'>Turns: {turns}</h2>
    </div>
  )
}

export default App
