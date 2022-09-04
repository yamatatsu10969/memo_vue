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
      this.$store.commit("save", this.content);
      this.$router.push("/");
    },
  },
};
</script>
