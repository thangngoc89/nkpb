import React, { PropTypes } from 'react'
import Header from './Header'
import './reset.css'
import styles from './App.css'

const AppContainer = ({ location, children }) => (
  <div className={styles.app}>
    <Header />
    <div className={styles.appContainer}>
      {React.cloneElement(children, { key: location.pathname })}
    </div>
  </div>
)

AppContainer.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
}

export default AppContainer
