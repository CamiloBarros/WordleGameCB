import Button from '../components/Button'
import FieldText from '../components/FieldText'
import Grid from '../components/Grid'

import Title from '../components/Title'
import useWordle from '../hooks/useWordle'

/**
 * todo: Agregar, alerta de perdió o ganó el juego
 * 
 */

const Home = () => {
  const {
    word,
    wordSelected,
    wordCompleted,
    turns,
    stateGame,
    handleInput,
    handleKey,
    resetGame
  } = useWordle()

  return (
    <div className='flex flex-col justify-between items-center max-w-md mx-auto h-screen p-8 bg-stone-900'>
      <Title state={stateGame} />
      <div>
        <h2 className='font-semibold text-sm text-stone-200 text-right'>Turns: {turns - 1}</h2>     
        
        <FieldText onTyped={handleInput} onEnter={handleKey} text={word} stateGame={stateGame} />

        <Grid wordSelected={wordSelected} wordCompleted={wordCompleted} word={word} turns={turns} />
      </div>
      <div className='flex items-center justify-center h-16 w-24'>
        <Button stateGame={stateGame} onClick={resetGame} />
      </div>
      
    </div>
  )
}

export default Home
