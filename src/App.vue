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
interface ItemObj {
  id: string;
  fullTitle: string;
  img_path: string;
}

var allItems: ItemObj[] = [];

let itm: string;
for (itm in contentData.items) {
  console.log(itm);
  allItems.push(contentData["items"][itm]);
}

export const useStore = defineStore("storeId", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // type inferred automatically
      itemsFromStore: allItems as ItemObj[],
    };
  },
  getters: {
    getItemById: (state) => {
      return (itemId: string) =>
        state.itemsFromStore.find((item) => item.id === itemId);
    },
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
