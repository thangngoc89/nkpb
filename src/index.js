import 'react-polymer'
import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader'
import App from './App'
import createStore from './redux/createStore'

const rootEl = document.getElementById('root')
const store = createStore()

ReactDOM.render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    // eslint-disable-next-line global-require
    const NextApp = require('./App').default

    ReactDOM.render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      rootEl
    )
  })
}
