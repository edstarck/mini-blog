import {mutationsTypes} from '@/store/modules/posts/mutationTypes'

export const mutations = {
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
