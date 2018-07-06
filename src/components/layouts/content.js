import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Layout, Row, Col } from 'antd'
import Job from './../jobs'
import JobDetail from './../jobs/detail'
import NotFound from './../exceptions/404'
import './content.less'

class content extends Component {
  render() {
    return (
      <Layout.Content style={{ padding: '16px', marginTop: 64, minHeight: '100vh' }}>
        <Row type='flex' gutter={16} justify='center'>
          <Col xs={24} sm={24} md={16} lg={16} xl={10}>
            <Switch>
              <Route exact path='/job' component={Job}/>
              <Route exact path='/job/:id' component={JobDetail}/>
              <Route component={NotFound}/>
            </Switch>
          </Col>
        </Row>
      </Layout.Content>
    );
  }
}

export default content;
