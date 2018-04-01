import React from 'react'
import ReactDOM from 'react-dom'
import { Index } from './components'
import { Provider } from 'react-redux'
import { store } from './stores'

const RootApp = () => (
  <Provider store={store}>
    <Index />
  </Provider>
)
const rootElement = document.querySelector('#root')
const createRootElement = document.createElement('div')

ReactDOM.render(
  <RootApp />,
  rootElement || createRootElement
)
