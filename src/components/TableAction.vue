<template>
  <IconBtn class="table-action" @click="handleClick">
    <v-tooltip location="top" activator="parent">{{ tooltip }}</v-tooltip>
    <VIcon>{{ icon }}</VIcon>
  </IconBtn>
</template>
    
  <script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  icon: String,
  tooltip: String,
  click: Function,
});

const handleClick = () => {
  if (typeof props.click === "function") {
    props.click();
  }
};
</script>
    
  <style scoped>
.table-action {
  cursor: pointer;
}
</style>