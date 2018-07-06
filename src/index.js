import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Component } from './components'
import { Provider } from 'react-redux'
import { store } from './stores'

const RootApp = () => (
  <Provider store={store}>
    <Router history={createBrowserHistory()} >
      <Component />
    </Router>
  </Provider>
)
const rootElement = document.querySelector('#root')
const createRootElement = document.createElement('div')

ReactDOM.render(
  <RootApp />,
  rootElement || createRootElement
)
