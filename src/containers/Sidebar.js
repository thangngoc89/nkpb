import React, { PropTypes } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { actions as HeaderActions } from '../redux/modules/header'
import { Link } from 'react-router'
import styles from './Sidebar.css'
import cx from 'classnames'

const List = ({ list }) => {
  const tabStyles = `
    .paper-item-0 {
      --paper-item-selected-weight: 300 !important;
      --paper-item-selected: {
        background: rgba(0, 0, 0, 0.3);
      }
      --paper-item-focused-before: {
        opacity: 0;
      }
    };
  `

  return (
    <div className={styles.leftPanel}>
      <style is="custom-style" dangerouslySetInnerHTML={{ __html: tabStyles }} />
      <paper-listbox>
        {
          list.map((item) => (
            <paper-item key={item.name}>
              <iron-icon icon={item.icon} />
              {item.name}
              <paper-ripple />
            </paper-item>
          ))
        }
      </paper-listbox>
    </div>
  )
}

List.propTypes = {
  list: PropTypes.array.isRequired,
}

const SidebarContainer = ({ title, icon, list, children }) => (
  <div className={styles.wrap}>
    <Link
      to="/"
      className={cx(styles.iconWrap, {
        [styles.hide]: !icon.display,
      })}
    >
      <paper-icon-button className={styles.icon} icon={icon.icon} />
    </Link>
    <div className={styles.titleWrap}>
      <h1
        className={cx(styles.title, {
          [styles.titleNoIcon]: !icon.display,
        })}
      >
        { title }
      </h1>
    </div>

    <div className={styles.panelWrap}>
      <List list={list} />
      <div className={styles.rightPanel}>
        { children }
      </div>
    </div>
  </div>
)

SidebarContainer.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

const mapStateToProps = ({ sidebar }) => ({ ...sidebar })

export default connect(
  mapStateToProps,
  // (dispatch) => bindActionCreators(sidebarActions, dispatch),
)(SidebarContainer)
