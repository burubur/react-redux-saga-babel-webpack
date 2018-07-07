import axios from 'axios'

const jobUrl = 'http://private-27298f-frontendtestmaukerja.apiary-mock.com/jobs'

export const fetchJob = async ({offset = 0, limit = 10}) => {
  try {
    let response = await new axios.get(`http://private-27298f-frontendtestmaukerja.apiary-mock.com/jobs?offset=${offset}&limit=${limit}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
