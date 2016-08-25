import { remote } from 'electron'
// ------------------------------------
// Constants
// ------------------------------------
export const MAXIMIZE = '@@window/MAXMIZE'
export const UNMAXIMIZE = '@@window/UNMAXMIZE'
export const CLOSE = '@@window/CLOSE'
export const RESTORE = '@@window/RESTORE'
export const MINIMIZE = '@@window/MINIMIZE'

// ------------------------------------
// Actions
// ------------------------------------

export const maximize = () => ({ type: MAXIMIZE })

export const handleMaximize = (shouldCallAction = false) => (dispatch) => {
  if (shouldCallAction) {
    remote.getCurrentWindow().maximize()
    return
  }
  dispatch(maximize())
}

export const unmaximize = () => ({ type: UNMAXIMIZE })

export const handleUnmaximize = (shouldCallAction = false) => (dispatch) => {
  if (shouldCallAction) {
    remote.getCurrentWindow().unmaximize()
    return
  }
  dispatch(unmaximize())
}

export const minimize = () => ({ type: MINIMIZE })

export const handleMinimize = (shouldCallAction = false) => (dispatch) => {
  if (shouldCallAction) {
    remote.getCurrentWindow().minimize()
    return
  }
  dispatch(minimize())
}

export const close = () => ({ type: CLOSE })

export const handleClose = () => (dispatch) => {
  remote.getCurrentWindow().close()
  dispatch(close())
}

export function restore() {
  return { type: RESTORE }
}

export const actions = {
  maximize: handleMaximize,
  unmaximize: handleUnmaximize,
  minimize: handleMinimize,
  close: handleClose,
  restore,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [MAXIMIZE]: (state) => ({ ...state, isMaximized: true }),
  [UNMAXIMIZE]: (state) => ({ ...state, isMaximized: false }),
  [RESTORE]: (state) => ({ ...state, isMinimized: false }),
  [MINIMIZE]: (state) => ({ ...state, isMinimized: true }),
  [CLOSE]: (state) => state,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isMaximized: false,
  isMinimized: false,
  isClosed: false,
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
