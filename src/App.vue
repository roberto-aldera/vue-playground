<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
import SimpleFooter from "./components/SimpleFooter.vue";
import MealGrid from "./components/MealGrid.vue";
import { defineStore } from "pinia";
import contentData from "../content_data.json";
</script>

<template>
  <header>
    <TheNavbar />
  </header>

  <main>
    <MealGrid />
  </main>

  <footer>
    <SimpleFooter />
  </footer>
</template>

<script lang="ts">
interface itemObj {
  id: string;
  fullTitle: string;
  img_path: string;
}

export const useStore = defineStore("storeId", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // type inferred automatically
      itemsFromStore: [
        contentData.items.item1,
        contentData.items.item2,
        contentData.items.item3,
      ],
    };
  },
});

export default {
  components: {
    MealGrid,
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}
</style>
