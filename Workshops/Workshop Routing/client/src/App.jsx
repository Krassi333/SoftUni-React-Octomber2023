import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import GameList from './components/GameList/GameList'
import GameCreate from './components/GameCreate/GameCreate'
import Login from './components/Login/Login'
import Register from './components/Register/Register'


function App() {

  return (
    <>
      <div id="box">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allGames" element={<GameList />} />
          <Route path="/createGame" element={<GameCreate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </div>
    </>
  )
}

export default App
