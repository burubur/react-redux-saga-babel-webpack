import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Card } from 'antd'

class responsibility extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <Card
          title='Responsibilites'
        >
          <ul>
            {Array.from(data).map(item => (<li key={item}>{item}</li>))}
          </ul>
        </Card>   
      </div>
    )
  }
}

responsibility.propType = {
  data: PropTypes.array.isRequired
}

export default responsibility
