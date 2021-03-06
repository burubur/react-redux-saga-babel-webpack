import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, render } from 'enzyme'
import { Index } from './index'

configure({ adapter: new Adapter() })

const wrapper = render(<Index />)

test('it should render no empty component', () => {
  expect(wrapper.text()).toContain('')
})
