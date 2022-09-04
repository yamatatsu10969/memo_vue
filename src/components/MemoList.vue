<template>
  <div class="container">メモリスト</div>
  <ul>
    <li v-for="memo in memos" :key="memo.id">
      {{ memo.content }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "MemoList",
  computed: {
    memos() {
      return this.$store.state.memos;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
