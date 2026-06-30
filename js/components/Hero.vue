<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-top">
        <span class="label">{{ t('home.greeting') }}</span>
        <h1 class="title">Gemma 4</h1>
        <p class="tagline">{{ t('slogan') }}</p>
      </div>
      <div class="hero-desc">
        {{ t('home.description') }}
      </div>
      <div class="hero-cta">
        <router-link to="/models" class="cta-btn primary">
          {{ t('home.quickStart') }}
        </router-link>
        <router-link to="/models" class="cta-btn secondary">
          {{ t('home.loadWeight') }}
        </router-link>
      </div>
      <div class="hero-examples">
        <div class="example-item">
          <div class="example-label">{{ t('home.examples') }}</div>
          <div class="example-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
        <div class="example-item">
          <div class="example-label">{{ t('home.seeAll') }}</div>
          <div class="example-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-bg"></div>
  </section>
</template>

<script setup>
import { t } from '../i18n/lang.js'
</script>

<style>
.hero {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 60px 24px;
  max-width: 980px;
  margin: 0 auto;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  background: linear-gradient(180deg, rgba(10,10,26,0.85) 0%, rgba(28,28,62,0.7) 70%, rgba(10,10,26,0.9) 100%),
              radial-gradient(ellipse 500px 220px at 42% -14%, rgba(102, 252, 245, 0.12), transparent 70%),
              radial-gradient(ellipse 320px 160px at 78% -28%, rgba(102, 252, 245, 0.08), transparent 65%);
  border-radius: 24px;
  border: 1px solid rgba(102, 252, 245, 0.08);
  padding: 38px 36px;
  box-shadow: 0 22px 60px rgba(0,0,0,0.42);
  position: relative;
}

.label {
  display: inline-block;
  padding: 3px 12px;
  background: rgba(102, 252, 245, 0.09);
  border: 1px solid rgba(102, 252, 245, 0.22);
  border-radius: 999px;
  color: rgba(102, 252, 245, 0.88);
  font-size: 0.78em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.title {
  font-size: clamp(2em, 6vw, 3.6em);
  font-weight: 800;
  line-height: 1.08;
  color: #ffffff;
  letter-spacing: -1.5px;
  margin: 0;
}

.tagline {
  font-size: clamp(0.9em, 2.2vw, 1.25em);
  color: rgba(255,255,255,0.62);
  margin: 10px 0 0;
  line-height: 1.5;
}

.hero-desc {
  font-size: clamp(0.92em, 1.95vw, 1.15em);
  color: rgba(255,255,255,0.72);
  line-height: 1.62;
  max-width: 70ch;
  margin-top: 12px;
  font-weight: 400;
}

.hero-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 20px;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 28px;
  background: rgba(255,255,255,0.045);
  border: 1px solid rgba(255,255,255,0.11);
  border-radius: 11px;
  color: rgba(255,255,255,0.78);
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s cubic-bezier(0.2, 0.8, 0.3, 1);
}

.cta-btn:hover {
  background: rgba(255,255,255,0.085);
  border-color: rgba(255,255,255,0.18);
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(0,0,0,0.35);
}

.cta-btn.primary {
  background: rgba(102, 252, 245, 0.135);
  border-color: rgba(102, 252, 245, 0.42);
  color: #ffffff;
  box-shadow: 0 0 0 1px rgba(102, 252, 245, 0.12);
}

.cta-btn.primary:hover {
  background: rgba(102, 252, 245, 0.195);
  border-color: rgba(102, 252, 245, 0.6);
  box-shadow: 0 0 0 1px rgba(102, 252, 245, 0.12);
}

.hero-examples {
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: 22px;
  font-size: 0.78em;
}

.example-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  background: rgba(255,255,255,0.028);
  border-radius: 9px;
  color: rgba(255,255,255,0.48);
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.045);
  transition: border-color 0.18s ease, background 0.18s ease;
}

.example-item:hover {
  background: rgba(255,255,255,0.04);
  border-color: rgba(255,255,255,0.09);
}

.example-dots {
  display: flex;
  gap: 5px;
  opacity: 0.5;
}

.example-dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.38);
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(102, 252, 245, 0.035) 0%, rgba(102, 252, 245, 0.012) 50%, rgba(102, 252, 245, 0) 100%);
  border-radius: 24px;
  z-index: -1;
}
</style>
