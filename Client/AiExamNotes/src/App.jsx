import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Auth from './pages/Auth.jsx'

export const serverUrl="http://localhost:8000"

function App() {

  return (
    <>
   <Routes>
    <Route path="/auth" element={<Auth />} />
   </Routes>
   
    
    </>
  )
}

export default App
