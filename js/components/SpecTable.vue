<template>
  <div class="spec-table">
    <div v-for="row in rows" :key="row[0]">
      <div class="spec-row">
        <div class="spec-label">{{ t(row[0]) }}</div>
        <div class="spec-value">{{ row[1] }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { t } from '../i18n/lang.js'

const props = defineProps({
  spec: {
    type: Object,
    required: true
  }
})

const rows = [
  ['models.name', props.spec.name],
  ['specs.numberParams', props.spec.parameters],
  ['specs.releaseDate', props.spec.releaseDate],
  ['specs.language', props.spec.language],
  ['specs.familyOpen', props.spec.familyOpen],
  ['specs.supportsMultiLanguage', props.spec.supportsMultiLanguage],
  ['specs.quantization', props.spec.quantization],
  ['specs.family', props.spec.family],
  ['specs.accurate', props.spec.accurate],
  ['specs.inference', props.spec.inference],
  ['specs.pretraining', props.spec.pretraining],
  ['specs.codeTasks', props.spec.codeTasks],
  ['specs.instruction', props.spec.instruction],
  ['specs.tool', props.spec.tool],
  ['specs.reasoning', props.spec.reasoning],
  ['specs.reasoningPrecise', props.spec.reasoningPrecise],
  ['specs.unbiased', props.spec.unbiased],
  ['specs.language', props.spec.language],
  ['specs.family', props.spec.family],
  ['specs.devQuota', props.spec.devQuota],
  ['specs.reqLicense', props.spec.reqLicense],
  ['specs.reqLicenseSpecial', props.spec.reqLicenseSpecial],
  ['specs.reqLicenseDetails', props.spec.reqLicenseDetails],
  ['specs.reqLicenseSoft', props.spec.reqLicenseSoft],
  ['specs.reqLicensePatents', props.spec.reqLicensePatents]
]
</script>

<style>
.spec-table {
  background: rgba(255, 255, 255, 0.022);
  border: 1px solid rgba(255, 255, 255, 0.055);
  border-radius: 14px;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.82);
}

.spec-row {
  display: grid;
  grid-template-columns: 180px 1fr;
  align-items: start;
  padding: 12px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.038);
  gap: 14px;
}

.spec-row:last-child {
  border-bottom: none;
}

.spec-label {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.38);
  font-size: 0.88em;
  line-height: 1.42;
  min-height: 3.6em;
}

.spec-value {
  line-height: 1.42;
  font-size: 0.92em;
  color: rgba(255, 255, 255, 0.82);
}
</style>
