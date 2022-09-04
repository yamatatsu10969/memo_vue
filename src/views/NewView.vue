<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <MemoList />
      </div>
      <div class="col-6">
        <MemoForm memo="" />
      </div>
    </div>
  </div>
</template>

<script>
import MemoForm from "@/components/MemoForm.vue";
import MemoList from "@/components/MemoList.vue";

export default {
  name: "NewView",
  components: {
    MemoForm,
    MemoList,
  },
};
</script>
