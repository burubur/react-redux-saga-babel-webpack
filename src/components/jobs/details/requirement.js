import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, List, Divider } from 'antd'

class requirement extends Component {
  render() {
    const { data } = this.props
    return (
      <Card
        title='Requirements'
      >
        {Object.keys(data).map(reqItem => (
          <div key={reqItem}>
          <Divider orientation='left'>{reqItem}</Divider>
          <ul key={reqItem}>
            {Array.from(data[reqItem]).map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          </div>
        ))}
      </Card>
    )
  }
}

requirement.propTypes = {
  data: PropTypes.object.isRequired
}

export default requirement
