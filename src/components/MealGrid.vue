<script setup lang="ts">
import AnImageTile from "./AnImageTile.vue";
import { useStore } from "@/App.vue";
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div
        v-for="(item, index) in useStore().itemsFromStore"
        :key="index"
        class="col-auto"
      >
        <!-- wait for item.id to be available: https://stackoverflow.com/questions/69711253/error-missing-required-param-id-vue-router-router-link -->
        <router-link
          v-if="typeof item.id !== 'undefined'"
          :to="{ name: 'page', params: { id: item.id } }"
          ><AnImageTile :img_path="item.img_path" :title="item.fullTitle"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {
    AnImageTile,
  },
};
</script>
