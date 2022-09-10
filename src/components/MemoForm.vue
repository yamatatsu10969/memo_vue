<template>
  <div><textarea v-model="content" name="memo-form" id="memo-form" cols="30" rows="10"></textarea></div>
  <div><button class="btn btn-primary" @click="save">保存</button></div>
</template>

<script>
export default {
  name: "MemoForm",
  props: ["memo"],
  forceUpdate() {
    console.log("forceUpdate");
    return;
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  updated() {
    console.log("updated");
  },
  /// render した後にここは一度しか通らない
  /// また render をかける方法がわからない
  /// edit/** を何回か行くとデータが変わらない
  data() {
    console.log(this.memo.content);
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
