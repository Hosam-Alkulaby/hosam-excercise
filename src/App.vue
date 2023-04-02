<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import Header from './components/Header.vue'
import { onMounted } from 'vue'
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'

import { Modal } from 'flowbite'
</script>

<template>
<body class="bg-gray-100 dark:bg-gray-900">
  <SideBar />
  <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <Header></Header>

    <RouterView />
    
  </div>
</body>                           
</template>
