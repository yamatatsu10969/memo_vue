<template>
  <ul v-if="hasMemos">
    <li v-for="memo in memos" :key="memo.id">
      <router-link :to="{ name: 'edit', params: { id: memo.id } }">
        {{ this.title(memo) }}
      </router-link>
    </li>
  </ul>
  <p v-else>メモはありません</p>
  <router-link to="/new">+</router-link>
</template>

<script>
export default {
  name: "MemoList",
  computed: {
    memos() {
      return this.$store.getters.getAll;
    },
    hasMemos() {
      return this.$store.getters.hasMemos;
    },
  },
  methods: {
    title(memo) {
      return memo.content.split("\n")[0];
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
  color: #555;
  text-decoration: underline;
  width: 100%;
  display: block;
}
</style>
