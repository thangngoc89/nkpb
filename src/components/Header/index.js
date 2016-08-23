import React, { Component, PropTypes } from 'react'
import { TitleBar } from 'react-desktop/windows'
import { remote } from 'electron'
import styles from './index.css'

export default class Header extends Component {
  static propTypes = {
    isMinimized: PropTypes.bool.isRequired,
    isMaximized: PropTypes.bool.isRequired,
    isClosed: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    maximize: PropTypes.func.isRequired,
    unmaximize: PropTypes.func.isRequired,
    minimize: PropTypes.func.isRequired,
    restore: PropTypes.func.isRequired,
    theme: PropTypes.string,
    background: PropTypes.string,
  }

  static defaultProps = {
    background: 'transparent',
    theme: 'light',
  }

  componentDidMount() {
    const browserWindow = remote.getCurrentWindow()
    browserWindow.on('minimize', () => this.props.minimize())
    browserWindow.on('maximize', () => this.props.maximize())
    browserWindow.on('restore', () => this.props.restore())
    browserWindow.on('unmaximize', () => this.props.unmaximize())
  }

  render() {
    return (
      <div className={styles.header}>
        <span className={styles.title}>Dental Management</span>

        <TitleBar
          title=" "
          controls
          isMaximized={this.props.isMaximized}
          theme={this.props.theme}
          background={this.props.background}
          onCloseClick={this.props.close}
          onMinimizeClick={() => this.props.minimize(true)}
          onMaximizeClick={() => this.props.maximize(true)}
          onRestoreDownClick={() => this.props.unmaximize(true)}
        />
      </div>
    )
  }
}
