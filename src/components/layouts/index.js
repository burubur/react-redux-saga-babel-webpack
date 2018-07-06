import React, { Component } from 'react';
import { Layout } from 'antd'
import Header from './header'
import Content from './content'
import Footer from './footer'

class Base extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    )
  }
}

export default Base;
