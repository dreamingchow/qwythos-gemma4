<template>
  <div class="sponsors">
    <div class="sponsors-hero">
      <div class="sponsors-header">
        <h1>{{ t('sponsors.title') }}</h1>
        <p>{{ t('sponsors.sponsoredBy') }}</p>
      </div>
      <div class="sponsors-logos">
        <div class="logo">
          <div class="logo-icon">🤖</div>
          <div class="logo-details">
            <div class="logo-name">{{ t('sponsors.googleDeeplx') }}</div>
            <div class="logo-tagline">{{ t('sponsors.thePerplexicaApp') }}</div>
          </div>
        </div>
        <div class="logo">
          <div class="logo-icon">⚙️</div>
          <div class="logo-details">
            <div class="logo-name">{{ t('sponsors.llmopsWeekly') }}</div>
            <div class="logo-tagline">{{ t('sponsors.llmopsWeeklyPatreon') }}</div>
          </div>
        </div>
        <div class="logo">
          <div class="logo-icon">🤖</div>
          <div class="logo-details">
            <div class="logo-name">{{ t('sponsors.parlAI') }}</div>
            <div class="logo-tagline">{{ t('sponsors.scipy2025') }}</div>
          </div>
        </div>
        <div class="logo">
          <div class="logo-icon">🔧</div>
          <div class="logo-details">
            <div class="logo-name">{{ t('sponsors.openInferenceProject') }}</div>
            <div class="logo-tagline">{{ t('sponsors.groqHelps') }}</div>
          </div>
        </div>
        <div class="logo">
          <div class="logo-icon">💰</div>
          <div class="logo-details">
            <div class="logo-name">{{ t('sponsors.huggingFaceMakersReward') }}</div>
            <div class="logo-tagline">{{ t('sponsors.notebookLM') }}</div>
          </div>
        </div>
        <div class="logo">
          <div class="logo-icon">⚙️</div>
          <div class="logo-details">
            <div class="logo-name">{{ t('sponsors.allOf') }}</div>
            <div class="logo-tagline">{{ t('sponsors.allOf') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { t } from '../i18n/lang.js'
</script>

<style>
.sponsors {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 52px 20px 64px;
  max-width: 100%;
}

.sponsors-hero {
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: linear-gradient(180deg, rgba(10, 10, 26, 0.94) 0%, rgba(28, 28, 62, 0.88) 70%, rgba(10, 10, 26, 0.96) 100%),
              radial-gradient(ellipse 550px 200px at 52% -22%, rgba(102, 252, 245, 0.09), transparent 75%),
              radial-gradient(ellipse 380px 140px at 38% -8%, rgba(102, 252, 245, 0.06), transparent 65%);
  border-radius: 22px;
  border: 1px solid rgba(102, 252, 245, 0.10);
  padding: 52px 36px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.38);
}

.sponsors-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
}

.sponsors-header h1 {
  font-size: clamp(1.4em, 3.2vw, 2em);
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.6px;
}

.sponsors-header p {
  font-size: clamp(0.92em, 2.05vw, 1.15em);
  color: rgba(255, 255, 255, 0.62);
  margin: 0;
  line-height: 1.5;
}

.sponsors-logos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 18px;
  align-items: stretch;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.055);
  border-radius: 11px;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.logo:hover {
  background: rgba(255, 255, 255, 0.045);
  border-color: rgba(255, 255, 255, 0.09);
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.32);
}

.logo-icon {
  font-size: clamp(1.4em, 2.8vw, 1.8em);
  line-height: 1;
}

.logo-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.logo-name {
  font-size: clamp(0.95em, 1.95vw, 1em);
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.35;
}

.logo-tagline {
  font-size: 0.82em;
  color: rgba(255, 255, 255, 0.48);
  margin: 0;
  line-height: 1.45;
}
</style>
