import Article from '@/models/Article'
import {articlesTotal} from '@/helpers/vars'
import {uuid} from '@/helpers/utils'

export const data = []

for (let i = 1; i <= articlesTotal; i++) {
  const options = {
    id: uuid(),
    title: `Заголовок ${i}`,
    src: './assets/images/stub.jpg',
    body: 'Идейные соображения высшего порядка, а также сложившаяся структура организации играет важную роль в формировании существенных финансовых и административных условий. Равным образом начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки направлений прогрессивного развития.',
    reactions: Math.round(Math.random() * 100),
  }

  data.push(new Article(options))
}

export default data
