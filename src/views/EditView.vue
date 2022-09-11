<template>
  <div v-if="memo">
    <div class="row">
      <div class="col-6">
        <MemoList />
      </div>
      <div class="col-6">
        <MemoForm :memo="memo" />
      </div>
    </div>
  </div>
  <p v-else>指定されたメモはありません</p>
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
