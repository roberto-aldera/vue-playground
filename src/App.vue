<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
import SimpleFooter from "./components/SimpleFooter.vue";
import CategoryGrid from "./components/CategoryGrid.vue";
import { defineStore } from "pinia";
import contentData from "../content_data.json";
import type { ItemObj } from "./components/ItemObj";
</script>

<template>
  <header>
    <TheNavbar />
  </header>

  <main>
    <CategoryGrid />
  </main>

  <footer>
    <SimpleFooter />
  </footer>
</template>

<script lang="ts">
interface CategoryObj {
  name: string;
  items: ItemObj[];
  imgPath: string;
}

var allItems: CategoryObj[] = [];

let category: string;
for (category in contentData.categories) {
  allItems.push(
    contentData["categories"][
      category as keyof typeof contentData.categories
    ] as unknown as CategoryObj
  );
}

export const useStore = defineStore("storeId", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // type inferred automatically
      itemsFromStore: allItems as CategoryObj[],
    };
  },
  getters: {
    getCategoryByName: (state) => {
      return (categoryName: string) =>
        state.itemsFromStore.find((category) => category.name === categoryName);
    },
    getItemById() {
      return (categoryName: string, itemId: string) =>
        this.getCategoryByName(categoryName)?.items[itemId as any];
    },
  },
});

export default {
  components: {
    CategoryGrid,
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}
</style>
