import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header/'
import { actions as HeaderActions } from '../redux/modules/header'

function mapStateToProps({ header }) {
  return { ...header }
}

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators(HeaderActions, dispatch),
)(Header)
