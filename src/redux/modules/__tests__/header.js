import * as header from '../header'

const reducer = header.default

const initialState = {
  isMaximized: false,
  isMinimized: false,
  isClosed: false,
}

describe('(redux) header module', () => {
  describe('reducers', () => {
    it('handle maximize', () => {
      expect(reducer(initialState, header.maximize())).toEqual({
        isMaximized: true,
        isMinimized: false,
        isClosed: false,
      })
    })
    it('handle unmaximize', () => {
      const state = {
        ...initialState,
        isMaximized: true,
      }
      expect(reducer(state, header.unmaximize())).toEqual({
        isMaximized: false,
        isMinimized: false,
        isClosed: false,
      })
    })
    it('handle unminimize', () => {
      expect(reducer(initialState, header.minimize())).toEqual({
        isMaximized: false,
        isMinimized: true,
        isClosed: false,
      })
    })
    it('handle close should do nothing to the state', () => {
      expect(reducer(initialState, header.close())).toEqual(initialState)
    })
  })
})
