import React from 'react'
import { Link } from 'react-router'
import styles from './index.css'

const SettingTabs = () => {
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
    <div className={styles['left-panel']}>
      <style is="custom-style" dangerouslySetInnerHTML={{ __html: tabStyles }} />
      <paper-listbox className={styles['settings-tab-container']} selected="1">
        <paper-item className={styles['setting-tab']}>
          <iron-icon className={styles.icon} icon="image:tune" />
          {"General"}
          <paper-ripple />
        </paper-item>
        <paper-item className={styles['setting-tab']}>
          <iron-icon className={styles.icon} icon="device:widgets" />
          {"Plugins"}
          <paper-ripple />
        </paper-item>
        <paper-item className={styles['setting-tab']}>
          <iron-icon className={styles.icon} icon="info-outline" />
          {"About"}
          <paper-ripple />
        </paper-item>
      </paper-listbox>
    </div>
  )
}

const Home = () => (
  <div className={styles.settings}>

    <Link to="/" className={styles.backContainer}>
      <paper-icon-button className={styles.back} icon="arrow-back" />
    </Link>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Settings</h1>
    </div>

    <div className={styles['panel-container']}>
      <SettingTabs />
      <div className={styles['right-panel']}>

        <h2>User Interface</h2>
        <div className={styles['setting-inner']}>
          <paper-checkbox>Cycle trending series</paper-checkbox>
          <paper-checkbox>Adaptive UI colorization</paper-checkbox>
        </div>

        <h2>System</h2>
        <div className={styles['setting-inner']}>
          <paper-checkbox>Close button minimizes to tray</paper-checkbox>
          <paper-checkbox checked="1">Minimize to system tray</paper-checkbox>
          <paper-checkbox>Always display icon in tray</paper-checkbox>
          <paper-checkbox>Show confirmation dialog on exit</paper-checkbox>
        </div>
      </div>
    </div>
  </div>
)

export default Home
