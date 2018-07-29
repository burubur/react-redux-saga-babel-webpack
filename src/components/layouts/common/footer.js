import React, { Component } from 'react'
import { Layout } from 'antd'
import './footer.less'

class Footer extends Component {
    render() {
        const copyIssuer = process.env.APP_NAME || 'RSCH Laboratory'
        const releasedYear = '2018'
        const copyYear= releasedYear != new Date().getFullYear() ? releasedYear + '-' + new Date().getFullYear() : releasedYear
        const copyRight = `${copyIssuer} ©${copyYear}`

        return (
            <Layout.Footer>
                {copyRight}
            </Layout.Footer>
        )
    }
}

export default Footer
