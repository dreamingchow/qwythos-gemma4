<template>
  <div class="language-select">
    <button class="lang-btn" :class="{ selected: lang }" @click="toggleMenu">
      <span class="flag">{{ flag }}</span>
      <span class="name">{{ names[lang] }}</span>
      <span class="arrow">▼</span>
    </button>
    <ul class="lang-menu" v-show="isOpen">
      <li
        v-for="code in ['zh', 'en', 'ja']"
        :key="code"
        class="lang-item"
        :class="{ active: lang === code }"
        @click="select(code)"
      >
        <span class="flag">{{ flags[code] }}</span>
        <span>{{ names[code] }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const select = (lang) => {
  emit('update:language', lang)
}

const isOpen = defineModel<boolean>('open', { required: false })
const lang = defineModel('language', { required: true })

const names = {
  zh: '中文',
  en: 'English',
  ja: '日本語'
}

const flags = {
  zh: '🇨🇳',
  en: '🇺🇸',
  ja: '🇯🇵'
}

const value = localStorage.getItem('gemma4_lang') || 'en'
lang.value = value

const locale = computed(() => {
  return lang.value
})

const emit = {
  update: (value) => {
    lang.value = value
  }
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style>
.language-select {
  display: inline-block;
  position: relative;
}

.lang-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  color: rgba(255,255,255,0.7);
  font-size: 0.85em;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}

.lang-btn:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.16);
  color: #e8edf0;
}

.lang-btn.selected {
  background: rgba(102, 252, 245, 0.11);
  border-color: rgba(102, 252, 245, 0.4);
  color: #ffffff;
}

.lang-btn .arrow {
  font-size: 0.7em;
  opacity: 0.6;
  transition: transform 0.15s ease;
}

.lang-btn:hover .arrow {
  transform: translateY(-1px);
  opacity: 0.8;
}

.lang-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 170px;
  background: #0c0c1a;
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 10px;
  box-shadow: 0 10px 35px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.02);
  padding: 6px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px) scale(0.98);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.lang-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

.lang-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  color: rgba(255,255,255,0.6);
  font-size: 0.88em;
  cursor: pointer;
  transition: background 0.12s ease;
}

.lang-item:hover {
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.85);
}

.lang-item.active {
  background: rgba(102, 252, 245, 0.12);
  color: #ffffff;
}

.flag {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9em;
}
</style>
