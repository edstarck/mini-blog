import {actions} from '@/store/modules/posts/actions'
import {mutations} from '@/store/modules/posts/mutations'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

export default {
  state,
  mutations,
  actions,
}
