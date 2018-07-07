import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Form, Input, Icon } from 'antd'

@connect(store => store)
class searchForm extends Component {
  render() {
    const { dispatch } = this.props
    const { getFieldDecorator } = this.props.form
    const onSearch = (keyword) => {
      switch (keyword) {
        case '':
          dispatch({
            type: 'fetchJobsRequested',
            payload: {
              offset: 0,
              limit: 10
            }
          })        
          break;

        default:
          dispatch({
            type: 'searchRequested',
            payload: {
              keyword: keyword.trim()
            }
          })
          break;
      }
    }

    return (
      <div>
        <Form>
          <Form.Item>
            <Input.Search
              enterButton
              placeholder="Enter job title here..., then hit search button. Clean this form to reset."
              onSearch={onSearch}
            />
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const form = Form.create()(searchForm)

export default form
