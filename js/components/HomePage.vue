<template>
  <div class="home">
    <Hero />
    <section class="home-section">
      <h2>{{ t('home.loadingWeights') }}</h2>
      <div class="loading-buttons">
        <router-link to="/models/gemma3e" class="load-btn">
          {{ t('home.loadWeights') }}
          <span>{{ t('home.exampleWeights') }}</span>
        </router-link>
      </div>
    </section>
    <section class="home-section">
      <h2>{{ t('home.explorations') }}</h2>
      <div class="explorations">
        <a href="https://github.com/qwythos/QwythosAgent" target="_blank" rel="noopener" class="exploration-card">
          <div class="card-header">
            <span class="exp-icon">🔬</span>
            <span>{{ t('home.exploreTheme') }}</span>
          </div>
          <p>{{ t('home.exploreQuantaQuants') }}</p>
        </a>
        <a href="https://github.com/ggml-org/gguf" target="_blank" rel="noopener" class="exploration-card">
          <div class="card-header">
            <span class="exp-icon">📦</span>
            <span>{{ t('home.exploreFormat') }}</span>
          </div>
          <p>{{ t('home.exploreGGUF') }}</p>
        </a>
        <a href="https://github.com/qwythos/DeepEvalLLM" target="_blank" rel="noopener" class="exploration-card">
          <div class="card-header">
            <span class="exp-icon">⚖️</span>
            <span>{{ t('home.exploreEval') }}</span>
          </div>
          <p>{{ t('home.exploreEvalDesc') }}</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { t } from './lang.js'
import Hero from './Hero.vue'
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  gap: 38px;
  max-width: 100%;
}

.home-section {
  padding: 24px 20px;
}

.home-section h2 {
  font-size: clamp(1.2em, 2.4vw, 1.6em);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.88);
  margin: 0 0 20px;
  letter-spacing: -0.4px;
}

.loading-buttons {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  flex-wrap: wrap;
}

.load-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(102, 252, 245, 0.09);
  border: 1px solid rgba(102, 252, 245, 0.32);
  border-radius: 10px;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9em;
  transition: all 0.18s ease;
}

.load-btn:hover {
  background: rgba(102, 252, 245, 0.15);
  border-color: rgba(102, 252, 245, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(102, 252, 245, 0.16);
}

.load-btn span:last-child {
  font-size: 0.78em;
  opacity: 0.72;
  font-weight: 500;
}

.explorations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.exploration-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 22px;
  background: rgba(255, 255, 255, 0.032);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s cubic-bezier(0.2, 0.8, 0.3, 1);
}

.exploration-card:hover {
  background: rgba(255, 255, 255, 0.048);
  border-color: rgba(255, 255, 255, 0.11);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.38);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.exp-icon {
  font-size: clamp(1em, 2.2vw, 1.2em);
  line-height: 1;
}

.card-header span:last-child {
  font-weight: 600;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.84);
}

.exploration-card p {
  font-size: 0.84em;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.5);
}
</style>
