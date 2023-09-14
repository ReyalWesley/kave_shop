<script setup lang="ts">
import SingleItem from "@/components/single-item.vue";
import {CategoriesType, products} from "@/data/product";
import {Ref, ref} from "vue";

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

const allProducts = ref(products);

const filteredProducts = ref(allProducts.value);

const selectedCategories: Ref<{ [k in CategoriesType]: boolean }> = ref(
    Object.fromEntries(categories.map((category) => [category, false]))
) as Ref<{ [k in CategoriesType]: boolean }>;

const refreshFilter = (category: CategoriesType) => {
  selectedCategories.value[category] = !selectedCategories.value[category];
  filteredProducts.value = filterProducts();
  console.log(selectedCategories.value)
};

function filterProducts() {
  return allProducts.value.filter((product) => {
    return categories.every((category) => {
      return selectedCategories.value[category] ? product.category.includes(category) : true;
    });
  });
}

const resetFilter = () => {
  const keys = Object.keys(selectedCategories.value);
  keys.map((key: string) => {
    selectedCategories.value[key] = false;
  });
  filteredProducts.value = filterProducts();

  console.log(selectedCategories.value)
};

</script>
<template>
  <form class="flex m-auto gap-x-4 mb-6 w-5/6 justify-center flex-wrap">
    <label v-for="(category) in categories" :key="category" class="flex items-center gap-x-2">
      {{ category }}
      <input type="checkbox" @change="refreshFilter(category)" :checked="selectedCategories[category]">
    </label>
    <label>
      <button @click="resetFilter()">reset filter</button>
    </label>
  </form>

  <div class="parent grid grid-cols-2 xl:grid-cols-3 grid-rows-3 gap-x-10 gap-y-24 justify-items-center m-auto w-5/6">
    <single-item v-for="prod in filteredProducts" :product="prod" :key="prod.id"/>
  </div>
</template>
<style>
</style>