import React from 'react'
import renderer from 'react-test-renderer'

jest.mock('../../../containers/Sidebar')
jest.mock('../index.css')

const Home = require('../Home').default

describe('Home', () => {
  it('should render', () => {
    const component = renderer.create(
      <Home />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
