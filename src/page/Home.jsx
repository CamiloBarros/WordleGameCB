import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import FieldText from '../components/FieldText'
import Grid from '../components/Grid'

import Title from '../components/Title'
import useWordle from '../hooks/useWordle'

/**
 * todo: Agregar, alerta de perdió o ganó el juego
 * todo: Bug: Cambio de idioma luego de insertar una palabra
 */

const Home = () => {
  const [language, setLanguage] = useState('ES')

  const {
    word,
    wordSelected,
    wordCompleted,
    turns,
    stateGame,
    handleInput,
    handleKey,
    resetGame,
  } = useWordle({ language: language })
  
  const languageActive = {
    ES: 'justify-start',
    EN: 'justify-end'
  }

  const onChangeLanguage = () => {
    setLanguage( language === 'ES' ? 'EN' : 'ES')
  }

  
  return (
    <>
      <div>
        <div className='flex'>
          <button className={`bg-gray-200 border-2 rounded-full w-8 h-5 border-gray-400 flex mr-2 ${languageActive[language]}`} onClick={onChangeLanguage} disabled={wordCompleted.length > 0 ? true: false}>
            <span className='w-4 h-4 bg-stone-700 rounded-full' />
          </button>
          <span className='text-white text-sm font-semibold'>{language}</span>
          <Link to='help' className='ml-auto bg-white rounded-full h-7 w-7 border border-stone-800 font-bold hover:text-white hover:bg-inherit hover:border-stone-100 text-center'>?</Link>
        </div>
        
        <Title state={stateGame} />
      </div>
      <div>
        <h2 className='font-semibold text-sm text-stone-200 text-right'>
          Turns: {turns - 1}
        </h2>

        <FieldText
          onTyped={handleInput}
          onEnter={handleKey}
          text={word}
          stateGame={stateGame}
        />

        <Grid
          wordSelected={wordSelected}
          wordCompleted={wordCompleted}
          word={word}
          turns={turns}
        />
      </div>
      <div className='flex items-center justify-center h-16 w-24'>
        <Button stateGame={stateGame} onClick={resetGame} />
      </div>
    </>
  )
}

export default Home
