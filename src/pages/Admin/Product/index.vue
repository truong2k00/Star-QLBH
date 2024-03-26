<template>
  <tableProduct></tableProduct>
</template>
<script setup lang="ts">
import tableProduct from "@/views/Table/Product/index.vue";
const loadp = 1;
const loadpage = {
  if(loadp = 1) {
    window.location.reload();
  },
};
onMounted(() => {
  loadpage;
});
</script>