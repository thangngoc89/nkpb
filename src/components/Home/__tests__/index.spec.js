import React from 'react'
import renderer from 'react-test-renderer'
import Home from '../Home'

describe('Home', () => {
  it('should render', () => {
    const component = renderer.create(
      <Home />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
