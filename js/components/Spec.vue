<template>
  <div class="spec-page">
    <div class="spec-hero">
      <div class="spec-avatar">
        <span>🤖</span>
      </div>
      <div class="spec-header">
        <h1>{{ t('modelsList.' + modelId) }}</h1>
        <p v-if="spec.description" class="spec-description">{{ spec.description }}</p>
      </div>
    </div>
    <SpecTable :spec="spec" />
    <template v-if="spec.moreInfo">
      <h3>{{ t('models.modelDescription') }}</h3>
      <div class="info-section">
        <div class="info-row">
          <div class="info-icon">🎯</div>
          <div class="info-content">{{ t('models.pretrainingBased') }}</div>
        </div>
      </div>
      <div class="info-grid" v-if="spec.moreInfo.dataSources">
        <div v-for="source in spec.moreInfo.dataSources" :key="source">
          <span>{{ source }}</span>
        </div>
      </div>
      <h3>{{ t('models.moreOn') }}</h3>
      <ul class="extra-links">
        <li v-if="spec.moreInfo.link"><a :href="spec.moreInfo.link" target="_blank" rel="noopener">{{ t('models.specDetail') }}</a></li>
      </ul>
    </template>
  </div>
</template>

<script setup>
import { t } from './i18n/lang.js'
import SpecTable from './SpecTable.vue'

const route = useRoute()
const modelId = route.params.id || 'gemma4h'

const defaults = {
  name: t('modelsList.gemma4h'),
  parameters: 'tbd',
  releaseDate: '2025',
  language: 'English',
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
  reqLicense: { title: 'License Requirement', text: 'MIT' },
  reqLicenseSpecial: 'Standard license for open weights',
  reqLicenseDetails: 'MIT license allows free use, modification, and distribution',
  reqLicenseSoft: true,
  reqLicensePatents: 'No patent restrictions'
}

const spec = {
  ...defaults,
  id: modelId,
  moreInfo: {}
}
</script>

<style>
.spec-page {
  display: flex;
  flex-direction: column;
  gap: 34px;
  padding: 34px 20px 48px;
  max-width: 920px;
  margin: 0 auto;
}

.spec-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 34px 28px;
  background: linear-gradient(135deg, rgba(102, 252, 245, 0.07) 0%, rgba(102, 252, 245, 0.032) 100%),
              radial-gradient(ellipse 480px 160px at 52% -14%, rgba(102, 252, 245, 0.08), transparent 70%);
  border: 1px solid rgba(102, 252, 245, 0.12);
  border-radius: 18px;
  box-shadow: 0 14px 38px rgba(0, 0, 0, 0.32);
  position: relative;
  overflow: hidden;
}

.spec-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(102, 252, 245, 0.05) 0%, transparent 60%);
  opacity: 0.6;
  pointer-events: none;
}

.spec-avatar {
  font-size: clamp(2.8em, 6.5vw, 4em);
  line-height: 1;
}

.spec-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-bottom: 2px;
}

.spec-header h1 {
  font-size: clamp(1.3em, 3vw, 1.75em);
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.6px;
}

.spec-description {
  font-size: clamp(0.92em, 1.95vw, 1.08em);
  color: rgba(255, 255, 255, 0.52);
  margin: 0;
  max-width: 68ch;
  line-height: 1.52;
}

.info-section {
  padding: 16px 0;
  text-align: center;
}

.info-row {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(0.82em, 1.75vw, 0.9em);
  margin-bottom: 8px;
  transition: all 0.18s ease;
}

.info-row:hover {
  background: rgba(255, 255, 255, 0.045);
  border-color: rgba(255, 255, 255, 0.085);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.24);
}

.info-icon {
  font-size: clamp(1em, 2.15vw, 1.25em);
  line-height: 1;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 10px;
  margin-top: 12px;
}

.info-grid span {
  padding: 7px 12px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.045);
  border-radius: 7px;
  color: rgba(255, 255, 255, 0.6);
  font-size: clamp(0.78em, 1.7vw, 0.86em);
  text-align: center;
  transition: all 0.16s ease;
}

.info-grid span:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.82);
  transform: translateY(-1px);
}

h3 {
  font-size: 1.18em;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.88);
  margin: 0 0 12px;
  letter-spacing: -0.3px;
}

.extra-links {
  list-style: none;
  margin: 18px 0 0;
  padding: 0;
  text-align: center;
}

.extra-links li {
  margin-bottom: 8px;
}

.extra-links a {
  display: inline-block;
  padding: 10px 22px;
  background: rgba(102, 252, 245, 0.1);
  border: 1px solid rgba(102, 252, 245, 0.3);
  border-radius: 9px;
  color: #ffffff;
  text-decoration: none;
  font-size: clamp(0.9em, 1.9vw, 1em);
  font-weight: 600;
  transition: all 0.18s ease;
}

.extra-links a:hover {
  background: rgba(102, 252, 245, 0.18);
  border-color: rgba(102, 252, 245, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 252, 245, 0.14);
}
</style>
