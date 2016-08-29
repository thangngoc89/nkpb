import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'


const mapStateToProps = ({ sidebar }) => ({ ...sidebar })

export default connect(
  mapStateToProps,
  // (dispatch) => bindActionCreators(sidebarActions, dispatch),
)(Sidebar)
