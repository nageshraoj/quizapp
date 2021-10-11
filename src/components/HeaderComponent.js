import React, { useState } from 'react'
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Logout } from '../action/userAction'

const HeaderComponent = () => {
  const [index, setIndex] = useState(0)
  const dispatch = useDispatch()

  const userLogOut = () => {
    dispatch(Logout())
  }
  const headerSyle = makeStyles((theme) => ({
    tlbarStyle: {
      ...theme.mixins.toolbar,
    },
    tabsStyle: {
      marginLeft: 'auto',
    },
    tbStyle: {
      borderRadius: '10px',
      color: '#334756',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: '#F6D167',
      },
    },
  }))

  const style = headerSyle()
  return (
    <>
      <AppBar>
        <Toolbar>
          <Tabs
            value={index}
            onChange={(e, value) => setIndex(value)}
            className={style.tabsStyle}
          >
            <Tab
              className={style.tbStyle}
              label='Quiz'
              to='/quiz'
              component={Link}
            />
            <Tab
              className={style.tbStyle}
              label='Profile'
              to='/profile'
              component={Link}
            />
            <Tab
              className={style.tbStyle}
              label='Logout'
              to='/logout'
              onClick={(e) => userLogOut()}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={style.tlbarStyle} />
    </>
  )
}

export default HeaderComponent
