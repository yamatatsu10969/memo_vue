<template>
  <ul v-if="hasMemos">
    <li v-for="memo in memos" :key="memo.id">
      {{ this.title(memo) }}
    </li>
  </ul>
  <p v-else>メモはありません</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
