import blogApi from '@/api/blog.js'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

export const mutationsTypes = {
  dataLoadStart: '[blog] data load start',
  dataLoadSuccess: '[blog] data load success',
  dataLoadFailure: '[blog] data load failure',
}

export const actionsTypes = {
  getBlog: '[blog] get all data',
}

const mutations = {
  [mutationsTypes.dataLoadStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationsTypes.dataLoadSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationsTypes.dataLoadFailure](state) {
    state.isLoading = false
  },
}
const actions = {
  [actionsTypes.getBlog](context, {apiUrl}) {
    return new Promise((resolve) => {
      context.commit(mutationsTypes.dataLoadStart)

      blogApi
        .getBlog(apiUrl)
        .then(({response}) => {
          context.commit(mutationsTypes.dataLoadSuccess, response.data)
          resolve(response.data)
        })
        .catch(() => {
          context.commit(mutationsTypes.dataLoadFailure)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
