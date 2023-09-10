<template>
  <div class="parent grid grid-cols-3 grid-rows-3 gap-x-5 gap-y-10 justify-items-center m-auto w-5/6">
    <single-item />
    <single-item class="col-span-2" />
    <single-item class="col-span-2"/>
    <single-item />
    <single-item />
    <single-item class="col-span-2" />
    <single-item class="col-span-2"/>
    <single-item />
    <single-item />
  </div>
</template>
<style>
</style>
<script setup lang="ts">
import SingleItem from "@/components/single-item.vue";
</script>