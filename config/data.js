import Article from '@/models/Article'
import {FETCH_POSTS_LIMIT} from '@/helpers/constants/PostsConstant'
import {uuid} from '@/helpers/utils'

const data = []

const generateArticle = (i) => {
  const options = {
    id: uuid(),
    title: `Заголовок ${i}`,
    src: './assets/images/stub.jpg',
    body: 'Идейные соображения высшего порядка, а также сложившаяся структура организации играет важную роль в формировании существенных финансовых и административных условий. Равным образом начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки направлений прогрессивного развития.',
    reactions: Math.round(Math.random() * 100),
  }

  return new Article(options)
}

for (let i = 1; i <= FETCH_POSTS_LIMIT; i++) {
  data.push(generateArticle(i))
}

export default data
