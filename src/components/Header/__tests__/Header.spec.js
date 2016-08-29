import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../Header'

const noop = () => {}
const props = {
  isMaximized: false,
  isMinimized: false,
  close: noop,
  maximize: noop,
  unmaximize: noop,
  minimize: noop,
  restore: noop,
}

describe('Header', () => {
  it('render with default props', () => {
    const component = renderer.create(
      <Header {...props} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render with custom backgrund and theme', () => {
    const component = renderer.create(
      <Header background="black" theme="dark" {...props} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
