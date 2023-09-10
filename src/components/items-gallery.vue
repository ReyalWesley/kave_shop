<script setup lang="ts">
import SingleItem from "@/components/single-item.vue";
import {products} from "@/data/product";
</script>
<template>
  <div class="parent grid grid-cols-2 xl:grid-cols-3 grid-rows-3 gap-x-10 gap-y-10 justify-items-center m-auto w-5/6">
    <single-item v-for="prod in products" :product="prod" :key="prod.id"/>
  </div>
</template>
<style>
</style>