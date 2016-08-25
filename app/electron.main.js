// No destruct here https://github.com/electron/electron/issues/5897
// const { app, BrowserWindow, shell, screen } = require('electron');
const electron = require('electron')
const windowStateKeeper = require('electron-window-state')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow = null

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('ready', () => {
  const { workAreaSize } = electron.screen.getPrimaryDisplay()

  const mainWindowState = windowStateKeeper({
    defaultWidth: workAreaSize.width * 0.8,
    defaultHeight: workAreaSize.height * 0.8,
  })

  const browserWindowOptions = Object.assign({
    resizable: true,
    title: 'Photon Media',
    center: true,
    frame: false,
    show: false,
    minWidth: 768,
    minHeight: 468,
  }, mainWindowState)

  if (!mainWindow) {
    mainWindow = new BrowserWindow(browserWindowOptions)

    mainWindow.loadURL(`file://${__dirname}/index.html`)

    mainWindow.webContents.on('did-finish-load', () => {
      mainWindow.show()
      mainWindow.focus()
    })

    mainWindow.on('closed', () => {
      mainWindow = null
    })

    if (process.env.NODE_ENV === 'development') {
      mainWindow.openDevTools()
    }
  }
})
