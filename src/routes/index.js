import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../containers/App'
import Home from './Home'
import Error from './Error'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="*" component={Error} />
  </Route>
)
