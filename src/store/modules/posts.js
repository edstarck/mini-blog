import postsApi from '@/api/posts.js'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

export const mutationsTypes = {
  postsLoadStart: '[posts] posts load start',
  postsLoadSuccess: '[posts] posts load success',
  postsLoadFailure: '[posts] posts load failure',
}

export const actionsTypes = {
  fetchPosts: '[posts] fetch all posts',
}

const mutations = {
  [mutationsTypes.postsLoadStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationsTypes.postsLoadSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationsTypes.postsLoadFailure](state) {
    state.isLoading = false
  },
}
const actions = {
  [actionsTypes.fetchPosts](context, {apiUrl}) {
    return new Promise((resolve) => {
      context.commit(mutationsTypes.postsLoadStart)

      postsApi
        .fetchPosts(apiUrl)
        .then(({response}) => {
          context.commit(mutationsTypes.postsLoadSuccess, response.data)
          resolve(response.data)
        })
        .catch(() => {
          context.commit(mutationsTypes.postsLoadFailure)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
