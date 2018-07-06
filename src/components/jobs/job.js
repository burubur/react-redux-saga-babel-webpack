import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Row, Avatar, Icon } from 'antd'
import { fetchJob } from './../../services/job'
import { connect } from 'react-redux'
import './job.less'

@connect(store => store)
class Jobs extends Component {
  constructor(props){
    super(props)
    this.dispatch = props.dispatch
  }

  componentDidMount() {
    this.dispatch({
      type: 'fetchJobsRequested'
    })
  }
  
  render() {
    const { jobs } = this.props
    if (jobs.loading) {
      return (
        <div>
          <Card title='job ...' loading={true} />
          <Card title='job ...' loading={true} />
        </div>
      )
    } else {
      return (
        Array.from(jobs.data).map(job => (
          <Link to={'/job/'+job.id} replace key={job.id}>
          <Card id={job.id}
            key={job.id}
            hoverable
            actions={
              [<Icon type='share-alt' title='share' />,
              <Icon type='file' />,
              <Icon type='ellipsis' />]
            }
          >
            <Card.Meta
              avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' size='large' />}
              title={(<div>{job.title}<br /><h5>{job.company}</h5></div>)}
              description={job.description}
            />
          </Card>
          </Link>
          )
        )
      )
    }
  }
}

export default Jobs
