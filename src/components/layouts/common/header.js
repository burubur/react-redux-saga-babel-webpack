import React, { Component } from 'react'
import { Layout, Row, Col, Menu } from 'antd'
import Brand from './brand'
import './header.less'

class Header extends Component {
    render() {
        const mobileLayout = {
            xs: { span: 24},
            sm: { span: 24},
            md: { span: 0},
            lg: { span: 0},
            xl: { span: 0},
            xxl: { span: 0}
        }
        const desktopLayout = {
            xs: { span: 0},
            sm: { span: 0},
            md: { span: 12},
            lg: { span: 12},
            xl: { span: 12},
            xxl: { span: 12}
        }
        return (
            <Layout.Header>
                <Row type='flex' justify='space-between' align='middle'>
                    <Col {...mobileLayout}>
                        <Row type='flex' justify='center'>
                            <Brand />
                        </Row>
                    </Col>
                    <Col {...desktopLayout}>
                        <Brand />
                    </Col>
                    <Col {...desktopLayout}>
                        <Row type='flex' justify='end'>
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
                        </Row>
                    </Col>
                </Row>
            </Layout.Header>
        )
    }
}

export default Header
