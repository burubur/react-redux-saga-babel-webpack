import React from 'react'
import ReactDOM from 'react-dom'
import { Index as RootComponent } from './components'
import { Provider } from 'react-redux'
import { store } from './stores'

const RootApp = () => (
  <Provider store={store}>
    <RootComponent />
  </Provider>
)
const rootElement = document.querySelector('#root')
const createRootElement = document.createElement('div')

ReactDOM.render(
  <RootApp />,
  rootElement || createRootElement
)
