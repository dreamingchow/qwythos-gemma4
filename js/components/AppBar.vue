<template>
  <div class="app-bar">
    <router-link to="/" class="logo-link">
      <span class="logo-text">Gemma 4</span>
    </router-link>
    <nav class="nav">
      <router-link v-for="link in links" :key="link.key" :to="link.to">
        <span>{{ t(link.key) }}</span>
      </router-link>
    </nav>
    <div class="right">
      <LanguageSelect class="language-select" @update:language="updateLanguage" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { t } from './lang.js'
import LanguageSelect from './LanguageSelect.vue'

const route = useRoute()

const links = computed(() => {
  return [
    { key: 'nav.home', to: '/' },
    { key: 'nav.models', to: '/models' },
    { key: 'nav.about', to: '/about' },
    { key: 'nav.blog', to: '/blog' },
    { key: 'nav.sponsors', to: '/sponsors' }
  ]
})

const updateLanguage = (lang) => {
  localStorage.setItem('gemma4_lang', lang)
  window.location.reload()
}
</script>

<style>
.app-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 100%);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border-radius: 8px;
  transition: background 0.15s ease;
}

.logo-link:hover {
  background: rgba(255,255,255,0.06);
}

.logo-text {
  font-size: 1.4em;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: #e8edf0;
}

.nav {
  display: flex;
  gap: 8px;
}

.nav a {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 6px;
  color: rgba(255,255,255,0.68);
  font-size: 0.9em;
  font-weight: 500;
  transition: all 0.15s ease;
}

.nav a:hover, .nav a.router-link-active {
  background: rgba(255,255,255,0.08);
  color: #e8edf0;
}

.nav a.router-link-active {
  font-weight: 600;
}

.right {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
