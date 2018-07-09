import React, { Component } from 'react'
import { Layout } from 'antd'
import Face from './../../face'
import './content.less'

class Content extends Component {
    render() {
        return (
            <Layout.Content>
                <div className='rsch-content'>
                    <Face />             
                </div>
            </Layout.Content>
        )
    }
}

export default Content
