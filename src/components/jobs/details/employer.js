import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd'

class employer extends Component {
  render() {
    const { data } = this.props
    return (
      <Card
        title='Employer Contact'
      >
        <table>
          <tbody>
            <tr key='1'>
              <td>
                Phone
              </td>
              <td>
                : {data.phone}
              </td>
            </tr>
            <tr key='2'>
              <td>
                Whatsapp
              </td>
              <td>
                : {data.whatsapp}
              </td>
            </tr>
            <tr key='3'>
              <td>
                Email
              </td>
              <td>
                : {data.email}
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    );
  }
}

employer.propTypes = {
  data: PropTypes.object.isRequired
};

export default employer;
