<script setup lang="ts">
import AnImageTile from "./AnImageTile.vue";
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div v-for="(item, index) in items" :key="index" class="col-auto">
        <router-link :to="{ name: 'page', params: { id: item.id } }"
          ><AnImageTile :img_path="item.img_path" :title="item.fullTitle"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    items: Object,
  },
  components: {
    AnImageTile,
  },
};
</script>
