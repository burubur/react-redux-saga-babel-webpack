import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Icon } from 'antd'

class searchForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Form>
          <Form.Item>
            <Input suffix={<Icon type="search" style={{ color: '#ed3554' }} />} placeholder="Search..." />
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const form = Form.create()(searchForm)

export default form
