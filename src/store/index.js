import { createStore } from 'vuex'

export default createStore({
  state: {
    memos: []
  },
  getters: {
    getAll: (state) => {
      return state.memos;
    },
    hasMemos: (state) => {
      return state.memos.length;
    }
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
