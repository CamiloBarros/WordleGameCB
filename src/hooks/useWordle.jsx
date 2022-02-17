import { useEffect, useState } from 'react'

export default function useWordle() {
  const [word, setWord] = useState('')
  const [wordSelected, setWordSelected] = useState('BREAK')
  const [wordCompleted, setWordCompleted] = useState([])
  const [turns, setTurns] = useState(1)
  const [stateGame, setStateGame] = useState('Playing')

  useEffect(() => {
    checkStateGame()
    setWord('')
  }, [wordCompleted])

  const handleInput = (event) => {
    const { value } = event.target
    setWord(value.trim().toUpperCase())
  }

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      event.target.focus = false
      if (word.length === 5) {
        if ( turns <= 6 ) {
          setWordCompleted([...wordCompleted, word])
          setTurns(turns + 1)
        }
      }
    }
  }

  const checkStateGame = () => {
    /** 
     * States: 
     *  - Win: Ganó el juego
     *  - Lose: Pierde el juego
     *  - Playing: Jugando
     */

    if (word === wordSelected) {
      setStateGame('Win')
    }
    else {
      if (turns > 6) {
        setStateGame('Lose')
      }
    }
  }

  const resetGame = () => {
    setTurns(1)
    setWord('')
    setStateGame('Playing')
    setWordCompleted([])
  }

  return {
    word,
    wordSelected,
    wordCompleted,
    turns,
    stateGame,
    handleInput,
    handleKey,
    resetGame
  }
}