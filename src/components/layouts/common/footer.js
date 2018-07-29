import React, { Component } from 'react'
import { Layout } from 'antd'
import './footer.less'

class Footer extends Component {
    render() {
        const releasedYear = 2018
        const copy = releasedYear != new Date().getFullYear() ? releasedYear + '-' + new Date().getFullYear() : releasedYear
        return (
            <Layout.Footer>
                RSCH ©{copy} Burhan Mubarok
            </Layout.Footer>
        )
    }
}

export default Footer
