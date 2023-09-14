<script setup lang="ts">
import type {ProductType} from "@/data/product";

defineProps<{
  product: ProductType;
}>();

</script>
<template>
<div class="flex flex-col items-center gap-y-2">
  <div class="item bg-blue-200">
    <div class="bg-white relative hover:left-2 hover:-top-2 left-0 top-0 transition-transform duration-300">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover">
    </div>
  </div>
  <p class="text-center">
    {{ product.name }} <br>
    {{ product.price }}€
  </p>
</div>
</template>
<style>
  .item, .parent div {
    height: 350px;
    width: 100%;
  }
</style>