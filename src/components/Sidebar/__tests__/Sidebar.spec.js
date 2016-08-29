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
  it('should not require children to render', () => {
    const component = renderer.create(
      <Sidebar {...props} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render with no icon', () => {
    const component = renderer.create(
      <Sidebar {...props} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render with icon', () => {
    const newProps = {
      ...props,
      icon: {
        ...props.icon,
        display: true,
      },
    }

    const component = renderer.create(
      <Sidebar {...newProps} />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
