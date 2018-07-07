import React, { Component } from 'react';
import Search from './../forms/search'
import Job from './job'
import Pagination from './pagination'

class index extends Component {
  render() {
    return (
      <div>
        <Search />
        <Job />
        <Pagination />
      </div>
    );
  }
}

export default index
