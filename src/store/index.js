import { createStore } from 'vuex'
import { v4 as uuid } from 'uuid';
import { VuexPersistence } from "vuex-persist";

const vuexPersist = new VuexPersistence({
  storage: localStorage
})

export default createStore({
  state: {
    memos: [],
    editMemo: undefined,
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
    },
    getEditMemo: (state) => {
      return state.editMemo;
    }
  },
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    save(state, memo) {
      if (memo.id) {
        /// update
        const updateMemo = state.memos.find((storedMemo) => storedMemo.id === memo.id);
        updateMemo.content = memo.content;
      } else {
        /// create
        const newMemo = {
          id: uuid(),
          content: memo.content,
        }
        state.memos.unshift(newMemo)
      }
    },
    delete(state, id) {
      if (id) {
        state.memos = state.memos.filter(memo => memo.id !== id)
      }
    },
    setEditMemo(state, memo) {
      state.editMemo = memo;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexPersist.plugin]
})
