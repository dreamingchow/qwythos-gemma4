<template>
  <div class="about">
    <section class="about-hero">
      <h1>{{ t('about.headings.main') }}</h1>
    </section>
    <section class="about-body">
      <p>{{ t('about.mainBody.zh') }}</p>
    </section>
    <section class="about-contributors">
      <h3>{{ t('about.headings.related') }}</h3>
      <div class="contributor-card">
        <div class="contrib-avatar">👤</div>
        <div class="contrib-info">
          <span class="contrib-name">{{ t('about.contributors.zh') }}</span>
          <span class="contrib-note">{{ t('about.contributors.en') }}</span>
        </div>
      </div>
    </section>
    <section class="about-specs">
      <h3>{{ t('about.headings.main') }}</h3>
      <SpecTable :spec="modelSpec" />
    </section>
  </div>
</template>

<script setup>
import { t } from '../i18n/lang.js'
import SpecTable from './SpecTable.vue'

const modelSpec = {
  name: 'Gemma 4',
  parameters: 'Large scale model with optimized architecture',
  releaseDate: '2025',
  language: 'Gemma-based',
  familyOpen: true,
  supportsMultiLanguage: true,
  quantization: ['4-bit', '8-bit'],
  family: 'Gemma 4',
  accurate: true,
  inference: true,
  pretraining: true,
  codeTasks: true,
  instruction: true,
  tool: true,
  reasoning: true,
  reasoningPrecise: true,
  unbiased: true,
  devQuota: true,
  reqLicense: {
    title: 'License Requirement',
    text: 'MIT'
  },
  reqLicenseSpecial: 'Standard license for open weights',
  reqLicenseDetails: 'MIT license allows free use, modification, and distribution',
  reqLicenseSoft: true,
  reqLicensePatents: 'No patent restrictions'
}
</script>

<style>
.about {
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 44px 20px 60px;
  max-width: 920px;
  margin: 0 auto;
}

.about-hero {
  background: linear-gradient(135deg, rgba(102, 252, 245, 0.07) 0%, rgba(102, 252, 245, 0.025) 100%),
              radial-gradient(ellipse 400px 140px at 48% -12%, rgba(102, 252, 245, 0.08), transparent 70%);
  border-radius: 18px;
  padding: 48px 32px;
  border: 1px solid rgba(102, 252, 245, 0.14);
  box-shadow: 0 14px 38px rgba(0, 0, 0, 0.32);
  text-align: center;
}

.about-hero h1 {
  font-size: clamp(1.6em, 4.2vw, 2.4em);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -1.2px;
  margin: 0;
  line-height: 1.12;
}

.about-body {
  padding: 18px 0;
  font-size: clamp(0.95em, 2.05vw, 1.12em);
  line-height: 1.62;
  color: rgba(255, 255, 255, 0.72);
  text-align: center;
  max-width: 72ch;
  margin-left: auto;
  margin-right: auto;
}

.about-contributors {
  padding: 24px 0;
  text-align: center;
}

.about-contributors h3 {
  font-size: 1.2em;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.86);
  letter-spacing: -0.4px;
  margin-bottom: 18px;
}

.contributor-card {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.85em, 1.85vw, 0.95em);
}

.contrib-avatar {
  font-size: clamp(1.2em, 2.6vw, 1.5em);
  line-height: 1;
}

.contrib-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contrib-name {
  font-weight: 700;
  color: #ffffff;
}

.contrib-note {
  font-size: 0.82em;
  color: rgba(255, 255, 255, 0.48);
}

.about-specs {
  padding-bottom: 40px;
  text-align: center;
}

.about-specs h3 {
  font-size: 1.2em;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.86);
  letter-spacing: -0.4px;
  margin-bottom: 18px;
}
</style>
