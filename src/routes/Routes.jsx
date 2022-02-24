import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Help from '../page/Help'
import Home from '../page/Home'

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
          <Route path='help' element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent