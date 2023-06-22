import Post from '@/models/Post'
import {uuid} from '@/helpers/utils'
import {
  FETCH_POSTS_LIMIT,
  DEFAULT_POST_TITLE,
  DEFAULT_POST_IMAGE_URL,
} from '@/helpers/constants/PostsConstant'

const data = []

const generatePost = (i) => {
  const options = {
    id: uuid(),
    title: `Заголовок ${i}`,
    src: DEFAULT_POST_IMAGE_URL,
    body: DEFAULT_POST_TITLE,
    reactions: Math.round(Math.random() * 100),
  }

  return new Post(...Object.values(options))
}

for (let i = 1; i <= FETCH_POSTS_LIMIT; i++) {
  data.push(generatePost(i))
}

export default data
