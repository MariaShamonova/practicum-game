import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import MainHeader from './layout/header/MainHeader'
import Login from './pages/login/Login'
import Registration from './pages/registration/Registration'
import Profile from './pages/profile/Profile'
import Leaderboard from './pages/leaderboard/Leaderboard'
import Forum from './pages/forum/Forum'
import GameRules from './pages/gameRules/GameRules'
import { default as GameStart } from './pages/gameStart/GameStart'
import { Home } from './pages/home/Home'
import { default as GameRoom } from './pages/room/GameRoom'
import { NotFound } from './pages/notFound/NotFound'
import { GameEnd } from './pages/gameEnd/GameEnd'

import theme from './theme'
import { useContext } from 'react'
import { DARK_THEME, LIGHT_THEME, ThemeContext } from './ThemeWrapper'
import Game from './pages/game/Game'
import './App.less'

function App () {
  const { isDarkTheme } = useContext(ThemeContext)
  return <div className={ `app ${ isDarkTheme ? DARK_THEME : LIGHT_THEME }` }>
    <MainHeader />
    <Routes>
      <Route path='*' element={ <NotFound /> } />
      <Route path='/' element={ <Home /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/registration' element={ <Registration /> } />
      <Route path='/profile' element={ <Profile /> } />
      <Route path='/leaderboard' element={ <Leaderboard /> } />
      <Route path='/forum' element={ <Forum /> } />
      <Route path='/rules' element={ <GameRules /> } />
      <Route path='/game' element={ <Game /> } />
      <Route path='/game/start' element={ <GameStart /> } />
      <Route path='/game/end' element={ <GameEnd /> } />
      <Route path='/rooms/:roomId' element={ <GameRoom /> } />
    </Routes>
  </div>
}

export default App

