import React from 'react'
import { Link } from 'react-router-dom'

const Help = () => {
  return (
    <div className='container'>

      

      <div className='mt-4 px-4 py-8 text-stone-100 text-justify'>
        <header>
          <h1 className='font-bold text-xl'> WordleGameCB </h1>
        </header>
        <section className='mb-12'>
          <p>WordleGameCB is a game inspired by the Wordle word game developed by Josh Wardle. This application was developed with the aim of putting into practice React concepts such as the use of Hooks, Custom Hooks and States.</p>
        </section>
        <section className='mb-12'>
          <h2 className='text-xl font-bold'>HOW TO PLAY</h2>
          <p>To play WordleGameCB, you just have to try to guess the word of the day. The colors of the squares will give you clues when a letter is in the correct position and when it is contained in the word but not in the desired position. You only have 6 chances or turns to guess the word.</p>
        </section>
        <section className='mb-12'>
          <h3 className='text-xl font-bold'>COLORS</h3>
          <ul>
            <li><span className='text-green-700 font-semibold'>Green</span> : Correct position.</li>
            <li><span className='text-sky-700 font-semibold'>Blue </span> : Letter contained in the secret word.</li>
            <li><span className='text-gray-500/70 font-semibold'>Gray </span> : Letter is not contained in the secret word.</li>
          </ul>
        </section>
        <footer className='text-center'>
          <Link to='/' className='border border-stone-100 rounded-full px-2 py-1 hover:bg-stone-100 hover:text-stone-900 text-white'>Back</Link>
        </footer>
      </div>
      
    </div>
  )
}

export default Help