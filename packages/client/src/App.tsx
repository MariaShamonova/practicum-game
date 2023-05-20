import { useContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainHeader from './layout/header/MainHeader'
import GameNavigation from './modules/gameNavigation/GameNavigation'
import Login from './pages/login/Login'
import Registration from './pages/registration/Registration'
import Profile from './pages/profile/Profile'
import Leaderboard from './pages/leaderboard/Leaderboard'
import Forum from './pages/forum/Forum'
import GameRules from './pages/gameRules/GameRules'
import { Home } from './pages/home/Home'
import { NotFound } from './pages/notFound/NotFound'
import { DARK_THEME, LIGHT_THEME, ThemeContext } from './ThemeWrapper'
import GameStart from './pages/gameStart/GameStart'
import { useAppDispatch } from './store/store'
import { getUser } from './store/userSlice'

import './App.less'

function App() {
  const dispatch = useAppDispatch()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(getUser())
      .finally(() => setLoading(false))
  }, [])


  const { isDarkTheme } = useContext(ThemeContext)

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

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
      <Route path='/rooms' element={ <GameStart /> } />
      <Route path='/rooms/:roomId/*' element={ <GameNavigation /> } />
    </Routes>
  </div>
}

export default App

