import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { logIn } from '../action/userAction'
import { makeStyles } from '@material-ui/core/styles'

const LoginPage = () => {
  const dispatch = useDispatch()

  const logInStyle = makeStyles((theme) => ({
    btnStyle: {
      backgroundColor: '#64C9CF',
      borderRadius: '10px',
    },
    logInpageStyle: {
      position: 'fixed',
      top: '0px',
      left: '0px',
      height: '100vh',
      width: '100vw',
      padding: '0',
      margin: '0',
      background: '#628395',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginForm: {
      backgroundColor: '#FDE49C',
      padding: '50px 80px',
      borderRadius: '10px',
    },
    fieldStyle: {
      width: '100%',
      margin: '10px 20px',
      '& button': {
        width: '80%',
        marginLeft: '10px',
      },
    },
  }))

  const sytle = logInStyle()

  const userLogIn = () => {
    dispatch(logIn())
  }
  return (
    <div className={sytle.logInpageStyle}>
      <div className={sytle.loginForm}>
        <h1>Login Page</h1>
        <div className={sytle.fieldStyle}>
          <TextField variant='outlined' label='User ID' />
        </div>
        <div className={sytle.fieldStyle}>
          <TextField variant='outlined' type='password' label='Password' />
        </div>
        <div className={sytle.fieldStyle}>
          <Button onClick={userLogIn} className={sytle.btnStyle}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
