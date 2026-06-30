<template>
  <div class="add-model-page">
    <article class="add-model-hero">
      <h1>{{ t('models.title') }}</h1>
      <p class="add-model-subtitle">{{ t('models.subtitle') }}</p>
    </article>
    <section class="add-model-content">
      <div class="add-model-intro">
        <div class="intro-title">
          <h2>{{ t('models.note') }}</h2>
        </div>
        <div class="intro-body">
          <p>{{ t('models.note') }}</p>
          <p>{{ t('models.moreDetails') }}</p>
        </div>
        <div class="intro-cta">
          <a href="/models" class="cta-link">{{ t('models.readAll') }}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { t } from '../i18n/lang.js'
</script>

<style>
.add-model-page {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 20px 52px;
  max-width: 100%;
}

.add-model-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  padding: 36px 28px;
  background: linear-gradient(135deg, rgba(102, 252, 245, 0.07) 0%, rgba(102, 252, 245, 0.03) 100%),
              radial-gradient(ellipse 500px 200px at 52% -18%, rgba(102, 252, 245, 0.08), transparent 70%);
  border-radius: 20px;
  border: 1px solid rgba(102, 252, 245, 0.1);
  box-shadow: 0 14px 38px rgba(0, 0, 0, 0.32);
}

.add-model-hero h1 {
  font-size: clamp(1.4em, 3.2vw, 2em);
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.6px;
}

.add-model-hero > p {
  font-size: clamp(0.92em, 2.05vw, 1.15em);
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.5;
}

.add-model-subtitle {
  color: rgba(255, 255, 255, 0.54);
  font-size: 1em;
  font-weight: 500;
}

.add-model-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: left;
}

.add-model-intro {
  padding: 24px 28px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
}

.intro-title h2 {
  font-size: clamp(1.2em, 2.6vw, 1.5em);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.88);
  margin: 0 0 16px;
  letter-spacing: -0.4px;
}

.intro-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.intro-body p {
  font-size: clamp(0.9em, 1.95vw, 1.05em);
  color: rgba(255, 255, 255, 0.66);
  line-height: 1.6;
}

.intro-cta {
  display: flex;
  justify-content: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.cta-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 22px;
  background: rgba(102, 252, 245, 0.13);
  border: 1px solid rgba(102, 252, 245, 0.32);
  border-radius: 9px;
  color: #ffffff;
  text-decoration: none;
  font-size: clamp(0.88em, 1.85vw, 0.98em);
  font-weight: 600;
  transition: all 0.18s ease;
}

.cta-link:hover {
  background: rgba(102, 252, 245, 0.2);
  border-color: rgba(102, 252, 245, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.28);
}
</style>
