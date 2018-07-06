import React, { Component } from 'react';
import { Layout } from 'antd'

class footer extends Component {
  render() {
    return (
      <Layout.Footer style={{ position: 'fixed', bottom: '0px', width: '100vw', textAlign: 'center'}}>
        maukerja.co.id ©2017 designed by @burhanmubarok
        <br />
        resources: https://www.maukerja.my
      </Layout.Footer> 
    )
  }
}

export default footer