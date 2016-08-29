import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import cx from 'classnames'
import styles from './Sidebar.css'

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

const Sidebar = ({ title, icon, list, children }) => (
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

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ])
}

export default Sidebar
