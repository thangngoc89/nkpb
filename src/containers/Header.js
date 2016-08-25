import React, { Component, PropTypes } from 'react'
import { remote } from 'electron'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header/'
import { actions as HeaderActions } from '../redux/modules/header'

function mapStateToProps({ header }) {
  return { ...header }
}

class HeaderContainer extends Component {
  static propTypes = {
    close: PropTypes.func.isRequired,
    maximize: PropTypes.func.isRequired,
    unmaximize: PropTypes.func.isRequired,
    minimize: PropTypes.func.isRequired,
    restore: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const browserWindow = remote.getCurrentWindow()
    browserWindow.on('minimize', () => this.props.minimize())
    browserWindow.on('maximize', () => this.props.maximize())
    browserWindow.on('restore', () => this.props.restore())
    browserWindow.on('unmaximize', () => this.props.unmaximize())
  }

  render() {
    return (<Header {...this.props} />)
  }
}

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators(HeaderActions, dispatch),
)(HeaderContainer)
