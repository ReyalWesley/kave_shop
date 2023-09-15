<script setup lang="ts">
import SingleItem from "@/components/single-item.vue";
import { products } from "@/data/product";
import type { CategoriesType } from "@/data/product";
import { computed, ref } from "vue";

const selectedCategories = ref<Array<CategoriesType>>([]);

const allProducts = ref(products);
const categories: CategoriesType[] = [
  "Chairs",
  "Leather",
  "Plastic",
  "Wood",
  "Metal",
  "Cloth",
  "Marble",
  "Storage",
  "Couch",
  "Tables"
];

const resetFilter = () => {
  selectedCategories.value = [];
};

const filteredProducts = computed(() => {
  return allProducts.value.filter((product) => {
    return categories.every((category) => {
      return selectedCategories.value.includes(category) ? product.category.includes(category) : true;
    });
  });
});

</script>
<template>
  <form class="flex m-auto gap-x-4 mb-6 w-5/6 justify-center flex-wrap">
    <label v-for="(category, index) in categories" :key="index" class="flex items-center gap-x-2">
      {{ category }}
      <input type="checkbox" v-model="selectedCategories" :value="category">
    </label>
    <label>
      <button @click="resetFilter">reset filter</button>
    </label>
  </form>

  <div class="parent grid grid-cols-2 xl:grid-cols-3 grid-rows-3 gap-x-10 gap-y-24 justify-items-center m-auto w-5/6">
    <single-item v-for="prod in filteredProducts" :product="prod" :key="prod.id"/>
  </div>
</template>
<style>
</style>