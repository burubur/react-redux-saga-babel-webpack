import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Row } from 'antd'
import './header.less'

class CustomeHeader extends Component {
  render() {
    return (
      <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#ed3554', boxShadow: '0 3px 4px 0 rgba(0,0,0,0.2), 0 3px 3px -2px rgba(0,0,0,0.14), 0 1px 8px 0 rgba(0,0,0,0.12)' }}>
        <Row type='flex' justify='center'>
          <Link to="/job">
            <div className="logo" />
          </Link>
        </Row>
      </Layout.Header>
    );
  }
}

export default CustomeHeader
