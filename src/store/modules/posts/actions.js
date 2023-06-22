import postsApi from '@/api/posts.js'

import {mutationsTypes} from '@/store/modules/posts/mutationTypes'
import {actionsTypes} from '@/store/modules/posts/actionTypes'

export const actions = {
  [actionsTypes.fetchPosts](context, {apiUrl}) {
    return new Promise((resolve) => {
      context.commit(mutationsTypes.postsLoadStart)

      postsApi
        .fetchPosts(apiUrl)
        .then((response) => {
          context.commit(mutationsTypes.postsLoadSuccess, response.data)
          resolve(response.data)
        })
        .catch(() => {
          context.commit(mutationsTypes.postsLoadFailure)
        })
    })
  },
}
