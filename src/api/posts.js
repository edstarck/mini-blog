import axios from '@/api/axios'
import data from '../../config/data'

import {sleep} from '@/helpers/utils'
import {FETCH_POSTS_LATENCY} from '@/helpers/constants/PostsConstant'

const fetchPosts = async (apiUrl) => {
  await sleep(FETCH_POSTS_LATENCY)
  return axios.get(apiUrl).then(() => ({response: {data}}))
}

export default {
  fetchPosts,
}
