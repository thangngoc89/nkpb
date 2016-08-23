/* eslint-disable global-require */
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

export default function configureStore(initialState = {}) {
  // Compose final middleware and use devtools in debug environment
  let middleware = applyMiddleware(thunk)

  if (process.env.NODE_ENV === 'development') {
    const devTools = require('../containers/DevTools').default.instrument()
    // eslint-disable-next-line import/no-extraneous-dependencies
    const createLogger = require('redux-logger')

    const logger = createLogger({
      level: 'info',
      collapsed: false,
    })

    middleware = compose(
      applyMiddleware(thunk, logger),
      devTools,
    )
  }

  // Create final store and subscribe router in debug env ie. for devtools
  const store = createStore(rootReducer, initialState, middleware)

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default

      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
