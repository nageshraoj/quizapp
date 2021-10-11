import React, { useState } from 'react'
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'
import { Button, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { LoginFailed, LoginRequested } from '../action/userAction'
import { makeStyles } from '@material-ui/core/styles'

const LoginPage = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
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
    var authenticationData = {
      Username: username,
      Password: password,
    }

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
      authenticationData
    )
    var poolData = {
      UserPoolId: process.env.REACT_APP_USERPOOLID, // User pool id
      ClientId: process.env.REACT_APP_CLIENTID, //  client id
    }

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)
    var userData = {
      Username: username,
      Pool: userPool,
    }
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var token = result.getAccessToken().getJwtToken()
        // console.log(token)
        localStorage.setItem('token', token)
        dispatch(LoginRequested(token))
        return token
      },

      onFailure: function (err) {
        dispatch(LoginFailed())
        return err.message || JSON.stringify(err)
      },
    })
  }
  return (
    <div className={sytle.logInpageStyle}>
      <div className={sytle.loginForm}>
        <h1>Login Page</h1>
        <div className={sytle.fieldStyle}>
          <TextField
            variant='outlined'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            label='User ID'
          />
        </div>
        <div className={sytle.fieldStyle}>
          <TextField
            variant='outlined'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            label='Password'
          />
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
