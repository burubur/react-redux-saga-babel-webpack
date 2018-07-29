import React, { Component } from 'react'
import './brand.less'

class brand extends Component {
    render() {
        const { APP_NAME } = process.env
        return (
            <div className='rsch-brand'>
                {APP_NAME || 'Project Name'}
            </div>
        )
    }
}

export default brand;
