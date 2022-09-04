import { createStore } from 'vuex'

export default createStore({
  state: {
    memos: []
  },
  getters: {
  },
  mutations: {
    save(state, content) {
      let memo = {
        id: state.memos.length + 1,
        content: content,
      }
      state.memos.unshift(memo)
    }
  },
  actions: {
  },
  modules: {
  }
})
