import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import { Card, Avatar } from 'antd'

@connect(store => store)
class detail extends Component {
  constructor(props){
    super(props)
    this.dispatch = props.dispatch
    this.state = {
      job: {},
      loading: true
    }
  }

  componentDidMount() {
    const url = 'http://private-27298f-frontendtestmaukerja.apiary-mock.com/job/2'
    axios.get(url).then(response => {
      this.setState({
        job: response.data,
        loading: false
      })
    })
  }
  
  render() {
    const { job, loading } = this.state
    return (
      <Card
        loading={loading}
        title={loading ? 'Job Detail ...' : ''}
      >
        <Card.Meta
          avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' size='large' />}
          title={(<div>{job.title}<br /><h5>{job.company}</h5></div>)}
          description={job.description}
        />
      </Card>
    );
  }
}

export default detail;
