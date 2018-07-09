import React, { Component } from 'react'
import { Layout, Row, Col, Button } from 'antd'
import './header.less'

class Header extends Component {
    render() {
        return (
            <Layout.Header>
                <Row type='flex' justify='space-between'>
                    <Col>
                        <div className='rsch-brand'>
                            RSCH Laundry
                        </div>
                    </Col>
                    <Col>
                        <Button>Home</Button>
                        &nbsp;
                        &nbsp;
                        <Button>Services</Button>
                        &nbsp;
                        &nbsp;
                        <Button>Book</Button>
                        &nbsp;
                        &nbsp;
                        <Button type='default'>Account</Button>
                    </Col>
                </Row>
            </Layout.Header>
        )
    }
}

export default Header
