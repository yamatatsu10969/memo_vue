<template>
  <ul v-if="hasMemos">
    <li v-for="memo in memos" :key="memo.id">
      <div v-if="isEditMemo(memo)">{{ this.title(memo) }}</div>
      <router-link v-else :to="{ name: 'edit', params: { id: memo.id } }">
        {{ this.title(memo) }}
      </router-link>
    </li>
  </ul>
  <p v-else>メモはありません</p>
  <router-link to="/new">+</router-link>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MemoList",
  computed: mapState({
    memos: (state) => state.memos,
    hasMemos: (state) => state.memos.length > 0,
  }),
  methods: {
    title(memo) {
      return memo.content.split("\n")[0];
    },
    isEditMemo(memo) {
      let editMemo = this.$store.getters.getEditMemo;
      return editMemo && editMemo.id === memo.id;
    },
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  padding-bottom: 10px;
  margin-bottom: 10px;
}
li a {
  text-decoration: underline;
  width: 100%;
  display: block;
}
</style>
