<template>
  <VDataTable
    ref="table"
    expand-on-click
    :headers="tableConfig.headers"
    :items="tableConfig.data"
  >
    <template #item.image="{ item }"
      ><v-img
        width="3rem"
        aspect-ratio="16/9"
        cover
        :src="item.value.image"
      ></v-img>
    </template>
    <template #item.action="{ item }">
      <VBtn
        color="#1E88E5"
        icon="mdi-pencil"
        density="compact"
        @click="onEditItem(item)"
      ></VBtn>
      <VBtn
        color="error"
        icon="mdi-trash-can"
        density="compact"
      ></VBtn> </template
  ></VDataTable>
</template>

<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";
import category from "@/services/category";

const tableConfig = ref({
  headers: [
    { title: "", key: "data-table-expand" },
    { title: "ID", key: "productCategoryID" },
    { title: "Image", key: "image" },
    { title: "Tên", key: "categoryName" },
    { title: "Thao tác", key: "action" },
  ],
  data: [],
  pagination: {
    pageNo: 1,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20, 50],
    totalPages: 1,
    totalItems: 1,
  },
});
const editData = {
  editCategoryID: ref(""),
  editCategoryName: ref(""),
};
const onEditItem = (item) => {
  editData.editCategoryID = item.value.productCategoryID;
  editData.editCategoryName = item.value.categoryName;
  console.log(editData);
};

const loadData = async () => {
  const res = await category.GetAll();
  tableConfig.value.data = res;
  console.log(tableConfig);
};
onMounted(() => {
  loadData();
});
</script>