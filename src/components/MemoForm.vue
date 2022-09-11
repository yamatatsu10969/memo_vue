<template>
  <div><textarea v-model="content" name="memo-form" id="memo-form" cols="30" rows="10"></textarea></div>
  <div class="d-flex">
    <button class="btn btn-primary" @click="save">保存</button>
    <div v-if="hasId" class="ms-2">
      <button class="btn btn-danger" @click="remove">削除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemoForm",
  props: ["memo"],
  computed: {
    hasId() {
      return this.memo.id;
    },
  },
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
    remove() {
      this.$store.commit("delete", this.memo.id);
      this.$router.push("/");
    },
  },
};
</script>
