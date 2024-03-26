<script lang="ts" setup>
import { useToast } from "vue-toastification";
import Category from "@/views/Table/Category/index.vue";
import {
  CaiDatTongTheCardConfig,
  HeaderCaiDatChiTiet,
  defaultConfig,
} from "@/components/caiDatTongThe/type";
import { VDataTable } from "vuetify/labs/VDataTable";
import category from "@/services/category";

const tableCategoryConfig = ref({
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

const loadData = async () => {
  const res = await category.GetAll();
  tableCategoryConfig.value.data = res;
  console.log(tableCategoryConfig);
};
onMounted(() => {
  loadData();
});
const props = withDefaults(
  defineProps<{
    caiDatTongThe: any;
    title?: string;
    config?: CaiDatTongTheCardConfig;
  }>(),
  {
    config: defaultConfig,
  }
);
const makeHeaders = () => {
  let headers = props.config?.caiDatChiTiet?.headers.map((x) => {
    let column = HeaderCaiDatChiTiet[x];
    const config = props.config?.caiDatChiTiet;
    column.title = config[x]?.title || column.title;

    return column;
  });
  headers.push({ title: "Thao tác", key: "id", sortable: false });
  return headers;
};
const tableConfig = ref({
  headers: [],
  data: [],
  pagination: {
    pageNo: 1,
    pageSize: 10,
    totalPages: 1,
    totalItems: 1,
  },
});
const searchText = ref();

const showEnglish = ref(false);
</script>
<template>
  <AppCardActions
    action-refresh
    action-collapsed
    @refresh="refetchData"
    :title="cardTitle"
  >
    <VCardText>
      <VRow>
        <VCol cols="12">
          <AppFormSwitch
            v-model="showEnglish"
            label="Ẩn/Hiện nội dung tiếng Anh"
            :switch-label="
              showEnglish
                ? 'Đang hiện nội tiếng Anh'
                : 'Đang ẩn nội dung tiếng Anh'
            "
          />
        </VCol>

        <VCol cols="12" v-if="config?.caiDatTongThe?.tieuDe?.isShow">
          <AppTextField
            :label="config?.caiDatTongThe?.tieuDe?.title"
            :hint="config?.caiDatTongThe?.tieuDe?.hint"
          />
        </VCol>

        <VCol
          cols="12"
          v-if="showEnglish && config?.caiDatTongThe?.tieuDe?.isShow"
        >
          <AppTextField
            :label="config?.caiDatTongThe?.tieuDe?.title + ' tiếng Anh'"
            :hint="config?.caiDatTongThe?.tieuDe?.hint"
          />
        </VCol>

        <VCol cols="12" v-if="config?.caiDatTongThe?.link?.isShow">
          <AppTextField label="URL đính kèm" />
        </VCol>
      </VRow>
      <VRow v-if="config?.caiDatTongThe">
        <VCol class="py-4 px-2 text-center">
          <VBtn
            prepend-icon="fa-save"
            text="Lưu thông tin chung"
            @click="onSaveButtonClicked()"
          ></VBtn>
        </VCol>
      </VRow>

      <slot name="detail">
        <VDataTable
          :headers="tableCategoryConfig.headers"
          :items="tableCategoryConfig.data"
          v-if="config.caiDatChiTiet"
        >
          <template #top>
            <VDivider class="my-5" />
            <VRow justify="end">
              <VCol align-self="end" class="text-right">
                <v-btn
                  prepend-icon="mdi-plus"
                  text="Thêm chi tiết"
                  @click="onCreateButtonClicked"
                  v-if="config?.caiDatChiTiet?.canAddNew"
                ></v-btn>
              </VCol>
            </VRow>
          </template>
          <template #item.image="{ item }"
            ><v-img
              width="3rem"
              aspect-ratio="16/9"
              cover
              :src="item.value.image"
            ></v-img>
          </template>

          <template #item.action="{ item }">
            <div>
              <TableAction
                icon="mdi-square-edit-outline"
                tooltip="Sửa"
                @click="onEditIconClicked(item.raw)"
              />
              <TableAction
                icon="mdi-trash-can-outline"
                tooltip="Xóa"
                @click="onDeleteIconClicked(item.raw)"
                v-if="config?.caiDatChiTiet?.canAddNew"
              />
            </div>
          </template>

          <template #bottom>
            <div class="d-flex justify-end">
              <VPagination
                v-model="tableConfig.pagination.pageNo"
                total-visible="5"
                :length="tableConfig.pagination.totalPages"
                @update:modelValue="onPageNoChanged"
              >
                <template #next="slotProps">
                  <v-btn
                    v-bind="slotProps"
                    variant="tonal"
                    color="default"
                    :icon="false"
                    text="Tiếp"
                  />
                </template>
                <template #prev="slotProps">
                  <v-btn
                    v-bind="slotProps"
                    variant="tonal"
                    color="default"
                    :icon="false"
                    text="Trước"
                  />
                </template>
              </VPagination>
            </div>
          </template>
        </VDataTable>
        <CreateOrUpdateCaiDatChiTietPopup ref="onCreateOrUpdateDialog" />
        <ConfirmDeleteDialog ref="onDeleteDialog" />
      </slot>
    </VCardText>
  </AppCardActions>
</template>
