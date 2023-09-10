<template>
  <nav class="w-full flex sm:items-center justify-between px-6 pt-4 mb-12">
    <h2 class="text-4xl">
      <router-link :to="{ name: 'home'}">the kave shop</router-link>
    </h2>


    <div>
      <ul class="flex flex-col sm:flex-row gap-x-12">
        <li>
          <router-link :to="{ name: 'shop' }">shop</router-link>
        </li>
        <li>cart</li>
        <li>
          <router-link :to="{ name: 'account' }">account</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
</style>
<script setup lang="ts">
</script>