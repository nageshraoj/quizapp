import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { theme } from './style/mainTheme'
import HeaderComponent from './components/HeaderComponent'
import QuizPage from './pages/QuizPage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'

const App = () => {
  const isUserLogin = useSelector((state) => state.isUserLogin)
  
  return (
    <ThemeProvider theme={theme}>
      {isUserLogin.authen ? (
        <BrowserRouter>
          <HeaderComponent />
          <Route path='/' exact component={QuizPage} />
          <Route path='/quiz' exact component={QuizPage} />
          <Route path='/profile' exact component={ProfilePage} />
        </BrowserRouter>
      ) : (
        <LoginPage />
      )}
    </ThemeProvider>
  )
}

export default App
