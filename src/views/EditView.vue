<template>
  <div class="container">
    EditView params: {{ $route.params.id }} EditView memo: {{ memo.content }}
    <div class="row">
      <div class="col-6">
        <MemoList />
      </div>
      <div class="col-6">
        <MemoForm />
      </div>
    </div>
  </div>
</template>

<script>
import MemoForm from "@/components/MemoForm.vue";
import MemoList from "@/components/MemoList.vue";

export default {
  name: "EditView",
  components: {
    MemoForm,
    MemoList,
  },
  computed: {
    memo() {
      const id = this.$route.params.id;
      return this.$store.getters.getMemoById(id);
    },
  },
};
</script>
