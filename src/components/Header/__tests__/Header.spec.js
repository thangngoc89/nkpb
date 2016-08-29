import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../Header'

describe('Header', () => {
  it('render with default props', () => {
    const component = renderer.create(
      <Header />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render with custom backgrund and theme', () => {
    const component = renderer.create(
      <Header background="black" theme="dark" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
