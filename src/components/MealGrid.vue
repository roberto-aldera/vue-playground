<script lang="ts">
import AnImageTile from "./AnImageTile.vue";

export default {
  components: {
    AnImageTile,
  },

  data() {
    return {
      // image: "../src/assets/logo.svg",
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-auto">
        <AnImageTile img_path="../src/assets/logo.svg" title="The title" />
      </div>
      <div class="col-auto">
        <AnImageTile img_path="../src/assets/logo.svg" title="The title" />
      </div>
      <div class="col-auto">
        <AnImageTile img_path="../src/assets/logo.svg" title="The title" />
      </div>
    </div>
  </div>
</template>
