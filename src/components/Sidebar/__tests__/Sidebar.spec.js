import React from 'react'
import renderer from 'react-test-renderer'
import Sidebar from '../Sidebar.js'

const props = {
  title: 'Phước Bình',
  icon: {
    display: false,
    icon: 'arrow-back',
    link: '/',
  },
  list: [
    {
      name: 'Khách hàng',
      icon: 'social:person',
    },
    {
      name: 'Plugins',
      icon: 'device:widgets',
    },
    {
      name: 'About',
      icon: 'info-outline',
    },
  ],
}

describe('Sidebar', () => {
  it('render correctly', () => {
    const component = renderer.create(
      <Sidebar {...props} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
