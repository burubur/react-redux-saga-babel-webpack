import React, { Component } from 'react';
import Job from './job'
import Pagination from './pagination'

class index extends Component {
  render() {
    return (
      <div>
        <Job />
        <Pagination />
      </div>
    );
  }
}

export default index
