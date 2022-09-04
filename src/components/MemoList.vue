<template>
  <div class="container">メモリスト</div>
  <ul>
    <li v-for="memo in memos" :key="memo.id">
      {{ this.title(memo) }}
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
  methods: {
    title(memo) {
      return memo.content.split("\n")[0];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
