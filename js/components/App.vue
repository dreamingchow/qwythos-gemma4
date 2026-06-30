<template>
  <AppBar />
  <slot />
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue'
import AppBar from './AppBar.vue'
import Footer from './Footer.vue'

const savedLang = localStorage.getItem('gemma4_lang')
if (savedLang) {
  document.documentElement.lang = savedLang
}

onMounted(() => {
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      localStorage.setItem('gemma4_lang', document.documentElement.lang)
    }
  })
})
</script>
