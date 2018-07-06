import React, { Component } from 'react';
import { Pagination, Row } from 'antd'
import Job from './job'
import { connect } from 'react-redux'

@connect(store => store)
class index extends Component {
  render() {
    const { jobs } = this.props
    const onPaging = (page) => {
      console.log(page)   
    }
    return (
      <div>
        <Job />
        <Row type='flex' justify='center'>
          <Pagination
            current={1}
            total={50}
            pageSize={5}
            onChange={onPaging}
          />
        </Row>
      </div>
    );
  }
}

export default index