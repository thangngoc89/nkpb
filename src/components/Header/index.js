import React, { PropTypes } from 'react'
import { TitleBar } from 'react-desktop/windows'
import styles from './index.css'

const Header = (props) => (
  <div className={styles.header}>
    <span className={styles.title}>Dental Management</span>

    <TitleBar
      title=" "
      controls
      isMaximized={props.isMaximized}
      theme={props.theme}
      background={props.background}
      onCloseClick={props.close}
      onMinimizeClick={() => props.minimize(true)}
      onMaximizeClick={() => props.maximize(true)}
      onRestoreDownClick={() => props.unmaximize(true)}
    />
  </div>
)

Header.propTypes = {
  isMinimized: PropTypes.bool.isRequired,
  isMaximized: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  maximize: PropTypes.func.isRequired,
  unmaximize: PropTypes.func.isRequired,
  minimize: PropTypes.func.isRequired,
  restore: PropTypes.func.isRequired,
  theme: PropTypes.string,
  background: PropTypes.string,
}

Header.defaultProps = {
  background: 'transparent',
  theme: 'light',
}

export default Header
