<script lang="ts">
import AnImageTile from "./AnImageTile.vue";

export default {
  components: {
    AnImageTile,
  },

  data() {
    return {
      items: [
        {
          id: "pg1",
          fullTitle: "Title1",
          img_path: "../src/assets/logo.svg",
        },
        {
          id: "pg2",
          fullTitle: "Title2",
          img_path: "../src/assets/logo.svg",
        },
        {
          id: "pg3",
          fullTitle: "Title3",
          img_path: "../src/assets/logo.svg",
        },
      ],
    };
  },
};
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
