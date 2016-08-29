import React from 'react'
import styles from './index.css'
import Sidebar from '../../containers/Sidebar'

const Home = () => (
  <Sidebar>
    <h2 className={styles.groupTitle}>User Interface</h2>
    <div className={styles.group}>
      <paper-checkbox>Cycle trending series</paper-checkbox>
      <paper-checkbox checked="1">Adaptive UI colorization</paper-checkbox>
    </div>

    <h2 className={styles.groupTitle}>System</h2>
    <div className={styles.group}>
      <paper-checkbox>Close button minimizes to tray</paper-checkbox>
      <paper-checkbox checked="1">Minimize to system tray</paper-checkbox>
      <paper-checkbox>Always display icon in tray</paper-checkbox>
      <paper-checkbox>Show confirmation dialog on exit</paper-checkbox>
    </div>
  </Sidebar>
)

export default Home
