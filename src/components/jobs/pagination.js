import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Pagination, Row } from 'antd'

@connect(store => store)
class pagination extends Component {
  constructor(props){
    super(props)
    this.state = {
      current: 0,
      total: 35,
      pageSize: 5
    }
  }
  render() {
    const { dispatch } = this.props
    const { current, total, pageSize } = this.state
    const onPaging = (page) => {
      dispatch({
        type: 'fetchJobsRequested'
      })

      this.setState({
        current: page
      });
    }

    return (
      <Row type='flex' justify='center'>
        <Pagination
          size='small'
          current={current}
          total={total}
          pageSize={pageSize}
          onChange={onPaging}
        />
      </Row>
    )
  }
}

export default pagination
