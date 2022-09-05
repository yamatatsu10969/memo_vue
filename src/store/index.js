import { createStore } from 'vuex'
import { v4 as uuid } from 'uuid';

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
        id: uuid(),
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
