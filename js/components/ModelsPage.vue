<template>
  <div class="models-page">
    <section class="models-hero">
      <h1>{{ t('models.title') }}</h1>
      <p class="models-subtitle">{{ t('models.subtitle') }}</p>
      <p class="models-note">{{ t('models.note') }}</p>
    </section>
    <section class="models-content">
      <div class="models-filter">
        <h2>{{ t('models.selectModel') }}</h2>
        <div class="model-chips">
          <button
            v-for="code in ['gemma3e', 'gemma2b', 'gemma2b-t', 'gemma4p', 'gemma4s', 'gemma4c', 'gemma4m', 'gemma4h']"
            :key="code"
            class="chip"
            :class="{ active: route.meta.filter === code }"
            @click="handleFilter(code)"
          >
            {{ t('modelsList.' + code) }}
          </button>
        </div>
      </div>
      <div class="models-list">
        <SpecCard
          v-for="modelSpec in allSpecs"
          :key="modelSpec.id"
          :model-spec="modelSpec"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { t } from './i18n/lang.js'
import SpecCard from './SpecCard.js'

import gemma3eSpec from '@/mock/gemma3e-spec.js'
import gemma2bSpec from '@/mock/gemma2b-spec.js'
import gemma2btSpec from '@/mock/gemma2bt-spec.js'
import gemma4pSpec from '@/mock/gemma4p-spec.js'
import gemma4sSpec from '@/mock/gemma4s-spec.js'
import gemma4cSpec from '@/mock/gemma4c-spec.js'
import gemma4mSpec from '@/mock/gemma4m-spec.js'
import gemma4hSpec from '@/mock/gemma4h-spec.js'

const route = useRoute()
const models = {
  gemma3e: gemma3eSpec,
  gemma2b: gemma2bSpec,
  gemma2b-t: gemma2btSpec,
  gemma4p: gemma4pSpec,
  gemma4s: gemma4sSpec,
  gemma4c: gemma4cSpec,
  gemma4m: gemma4mSpec,
  gemma4h: gemma4hSpec
}

const filter = route.meta.filter || 'all'
const filtered = filter === 'all' ? Object.values(models) : [models[filter]]
const allSpecs = Object.values(models)

const handleFilter = (code) => {
  navigate({ query: { filter: code }, meta: { filter: code } })
}
</script>

<style>
.models-page {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 34px 20px 54px;
  max-width: 100%;
}

.models-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
  padding: 34px 28px;
  background: linear-gradient(135deg, rgba(102, 252, 245, 0.07) 0%, rgba(102, 252, 245, 0.03) 100%),
              radial-gradient(ellipse 520px 180px at 48% -20%, rgba(102, 252, 245, 0.08), transparent 70%);
  border-radius: 20px;
  border: 1px solid rgba(102, 252, 245, 0.1);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.3);
}

.models-hero h1 {
  font-size: clamp(1.4em, 3.2vw, 2.1em);
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.8px;
}

.models-hero > p {
  font-size: clamp(0.9em, 1.95vw, 1.05em);
  color: rgba(255, 255, 255, 0.52);
  margin: 0;
  line-height: 1.55;
  max-width: 70ch;
}

.models-subtitle {
  color: rgba(255, 255, 255, 0.78);
  font-weight: 600;
}

.models-note {
  color: rgba(255, 255, 255, 0.44);
  font-size: 0.9em;
  margin-top: 4px;
}

.models-content {
  display: flex;
  flex-direction: column;
  gap: 26px;
  text-align: left;
}

.models-filter {
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.055);
  border-radius: 13px;
  padding: 18px 18px 12px;
}

.models-filter h2 {
  font-size: clamp(1em, 2.15vw, 1.2em);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 4px;
  letter-spacing: -0.3px;
}

.model-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.6);
  font-size: clamp(0.82em, 1.7vw, 0.9em);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
}

.chip:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.85);
}

.chip.active {
  background: rgba(102, 252, 245, 0.13);
  border-color: rgba(102, 252, 245, 0.4);
  color: #ffffff;
  box-shadow: 0 0 0 1px rgba(102, 252, 245, 0.15);
}

.models-list {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
</style>
