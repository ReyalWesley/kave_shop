<script setup lang="ts">
import type {ProductType} from "@/data/product";

const props = defineProps<{
  product: ProductType;
}>();
</script>
<template>
<div class="item bg-red-50 border-3 border-red-800">
  <div class="border-3 border-red-50 bg-white relative left-2 -top-2 hover:left-0 hover:top-0 transition-transform duration-300">
    <img :src="product.image" alt="" class="w-full h-full object-cover">
  </div>
</div>
</template>
<style>
  .item, .parent div {
    height: 350px;
    width: 100%;
  }
</style>