import React, { Component } from 'react';
import { Pagination, Row } from 'antd'

class pagination extends Component {
  render() {
    const onPaging = (page) => {}

    return (
      <Row type='flex' justify='center'>
        <Pagination
          size='small'
          current={1}
          total={50}
          pageSize={5}
          onChange={onPaging}
        />
      </Row>
    )
  }
}

export default pagination
