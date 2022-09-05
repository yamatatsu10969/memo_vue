<template>
  <div><textarea v-model="content" name="memo-form" id="memo-form" cols="30" rows="10"></textarea></div>
  <div><button @click="save">保存</button></div>
</template>

<script>
export default {
  name: "MemoForm",
  props: ["memo"],
  data() {
    return {
      content: this.memo.content,
    };
  },
  methods: {
    save() {
      let memo = {
        content: this.content,
      };
      if (this.memo.id) {
        memo.id = this.memo.id;
      }
      this.$store.commit("save", memo);
      this.$router.push("/");
    },
  },
};
</script>
