import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import history from './core/history'
import routes from './routes'

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      {
        (() => {
          if (process.env.NODE_ENV !== 'production') {
             // eslint-disable-next-line global-require
            const DevTools = require('./containers/DevTools').default

            return <DevTools />
          }
          return null
        })()
      }
    </div>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App
