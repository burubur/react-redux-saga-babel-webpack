import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Card, Avatar, Icon, List, Divider } from 'antd'
import Employer from './details/employer'
import Requirement from './details/requirement'
import Responsibility from './details/responsibility'

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
    const { id } = this.props.match.params
    const url = `http://private-27298f-frontendtestmaukerja.apiary-mock.com/job/${id}`
    axios.get(url).then(response => {
      this.setState({
        job: response.data,
        loading: false
      })
    })
  }
  
  render() {
    const { job, loading } = this.state
    const { id } = this.props.match.params
    
    return (
      <div>
        <Card
          key={id}
          loading={loading}
          title={loading ? 'Job Detail ...' : ''}
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
        {
          Object.keys(job).length > 0 &&
          <div>
            <Employer data={job.employer_contact} />
            <Requirement data={job.requirements} />
            <Responsibility data={job.responsibilites} />
          </div>
        }
      </div>
    )
  }
}

export default detail
