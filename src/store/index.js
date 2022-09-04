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
    },
    getMemoById: (state) => (id) => {
      return state.memos.find((memo) => memo.id === id);
    }
  },
  mutations: {
    save(state, content) {
      let memo = {
        id: (state.memos.length + 1).toString(), // TODO: UUID にする
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
