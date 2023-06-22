import axios from '@/api/axios'
import data from '../../config/data'

import {sleep} from '@/helpers/utils'
import {latency} from '@/helpers/vars'

const getBlog = async (apiUrl) => {
  await sleep(latency)
  return axios.get(apiUrl).then(() => ({response: {data}}))
}

export default {
  getBlog,
}
