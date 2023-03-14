<script setup lang="ts">
import TheNavbar from "./TheNavbar.vue";
import SimpleFooter from "./SimpleFooter.vue";
import AnImageTile from "./AnImageTile.vue";
import { useStore } from "@/App.vue";
const store = useStore();
</script>

<template>
  <TheNavbar />
  <div class="container">
    <div class="row justify-content-center">
      <div
        v-for="(item, index) in store.getCategoryByName(categoryName)?.items"
        :key="index"
        class="col-auto"
      >
        <!-- wait for item.id to be available: https://stackoverflow.com/questions/69711253/error-missing-required-param-id-vue-router-router-link -->
        <router-link
          v-if="typeof item.id !== 'undefined'"
          :to="{ name: 'page', params: { id: item.id, name: categoryName } }"
          ><AnImageTile :imgPath="item.imgPath" :title="item.fullName"
        /></router-link>
      </div>
    </div>
  </div>
  <SimpleFooter />
</template>

<script lang="ts">
export default {
  components: {
    AnImageTile,
  },
  computed: {
    categoryName: function () {
      return this.$route.params.name as string;
    },
  },
};
</script>
