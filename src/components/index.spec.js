import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow, mount, render } from 'enzyme'
import { Index } from './index'

configure({ adapter: new Adapter() })

const wrapper = shallow(<Index />)

test('it should render layout base', () => {
  expect(wrapper.text()).toContain('<Base />')
})