<script lang="ts">
import AnImageTile from "./AnImageTile.vue";

export default {
  components: {
    AnImageTile,
  },

  data() {
    return {
      items: [
        { title: "Title1", img_path: "../src/assets/logo.svg" },
        { title: "Title2", img_path: "../src/assets/logo.svg" },
        { title: "Title3", img_path: "../src/assets/logo.svg" },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div v-for="(item, index) in items" :key="index" class="col-auto">
        <AnImageTile :img_path="item.img_path" :title="item.title" />
      </div>
    </div>
  </div>
</template>
