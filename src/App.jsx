// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './components/menu'
import Rodape from './components/rodape'

function App() {
  
  return(
    <>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
