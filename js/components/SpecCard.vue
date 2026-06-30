<template>
  <div class="spec-card">
    <div class="card-header">
      <h3>{{ modelSpec.title }}</h3>
      <span v-if="modelSpec.devStatus === 'active'" class="status-badge">{{ t('developmentStatus.active') }}</span>
      <span v-else-if="modelSpec.devStatus === 'upcoming'" class="status-badge up">{{ t('developmentStatus.upcoming') }}</span>
      <span v-else-if="modelSpec.devStatus === 'finalizing'" class="status-badge fin">{{ t('developmentStatus.finalizing') }}</span>
      <span v-else-if="modelSpec.devStatus === 'archived'" class="status-badge arch">{{ t('developmentStatus.archived') }}</span>
    </div>
    <div class="card-body">
      <div class="spec-row"><div class="label">{{ t('specs.name') }}</div><div>{{ modelSpec.name }}</div></div>
      <div class="spec-row"><div class="label">{{ t('specs.parameters') }}</div><div>{{ modelSpec.parameters }}</div></div>
      <div class="spec-row"><div class="label">{{ t('specs.releaseDate') }}</div><div>{{ modelSpec.releaseDate }}</div></div>
      <div class="spec-row"><div class="label">{{ t('specs.language') }}</div><div>{{ modelSpec.language }}</div></div>
    </div>
    <div class="card-footer">
      <router-link :to="modelSpec.href" class="view-link">{{ t('models.specDetail') }}</router-link>
    </div>
  </div>
</template>

<script setup>
import { t } from './lang.js'
const props = defineProps({
  modelSpec: {
    type: Object,
    required: true
  }
})
</script>

<style>
.spec-card {
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.075);
  border-radius: 14px;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.82);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
}

.spec-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.06);
}

.card-header {
  padding: 18px 20px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.card-header h3 {
  margin: 0 0 8px;
  font-size: 1.15em;
  font-weight: 700;
  letter-spacing: -0.3px;
  color: #ffffff;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: 7px;
  font-size: 0.73em;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.status-badge.up, .status-badge.fin {
  background: rgba(102, 252, 245, 0.09);
  border: 1px solid rgba(102, 252, 245, 0.28);
  color: rgba(102, 252, 245, 0.82);
}

.status-badge.arch {
  background: rgba(255, 142, 108, 0.10);
  border: 1px solid rgba(255, 142, 108, 0.25);
  color: rgba(255, 142, 108, 0.80);
}

.card-body {
  padding: 16px 20px;
}

.spec-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 7px 0;
  gap: 14px;
}

.spec-row .label {
  font-size: 0.81em;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.46);
  min-width: 140px;
}

.spec-row > div:last-child {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.74);
  min-width: auto;
}

.card-footer {
  padding: 12px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.045);
}

.view-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: rgba(102, 252, 245, 0.92);
  font-size: 0.84em;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.12s ease, color 0.12s ease;
}

.view-link:hover {
  color: #ffffff;
  opacity: 0.92;
}
</style>
