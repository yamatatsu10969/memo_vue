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
    save(state, memo) {
      if (memo.id) {
        /// update
        let updateMemo = state.memos.find((memo) => memo.id === memo.id);
        updateMemo.content = memo.content;
      } else {
        /// create
        let newMemo = {
          id: uuid(),
          content: memo.content,
        }
        state.memos.unshift(newMemo)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
