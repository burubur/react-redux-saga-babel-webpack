import React, { Component } from 'react'
import { Layout, Row, Col, Button } from 'antd'
import './header.less'

class Header extends Component {
    render() {
        return (
            <Layout.Header>
                <Row type='flex' justify='space-between'>
                    <Col>
                        <div className='brand' />
                    </Col>
                    <Col>
                        <Button type='default'>Account</Button>
                    </Col>
                </Row>
            </Layout.Header>
        )
    }
}

export default Header
