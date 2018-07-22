import React, { Component } from 'react'
import { Layout, Row, Col, Menu } from 'antd'
import './header.less'

class Header extends Component {
    render() {
        const { APP_NAME } = process.env
        return (
            <Layout.Header>
                <Row type='flex' justify='space-between' align='middle'>
                    <Col>
                        <div className='rsch-brand'>
                            {APP_NAME || 'Project Name'}
                        </div>
                    </Col>
                    <Col >
                        <Menu
                            mode='horizontal'
                            selectable={false}
                        >
                            <Menu.Item key="mail">
                                Services
                            </Menu.Item>
                            <Menu.Item key="mail2">
                                Book
                            </Menu.Item>
                            <Menu.Item key='account'>
                                Account
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Layout.Header>
        )
    }
}

export default Header
