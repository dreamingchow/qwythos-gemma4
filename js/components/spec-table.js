import { t } from './lang.js'

export function createSpecTable(spec) {
  const rows = [
    { key: 'models.name', value: spec.name },
    { key: 'specs.numberParams', value: spec.parameters },
    { key: 'specs.releaseDate', value: spec.releaseDate },
    { key: 'specs.language', value: spec.language },
    { key: 'specs.familyOpen', value: spec.familyOpen },
    { key: 'specs.supportsMultiLanguage', value: spec.supportsMultiLanguage },
    { key: 'specs.quantization', value: spec.quantization },
    { key: 'specs.family', value: spec.family },
    { key: 'specs.accurate', value: spec.accurate },
    { key: 'specs.inference', value: spec.inference },
    { key: 'specs.pretraining', value: spec.pretraining },
    { key: 'specs.codeTasks', value: spec.codeTasks },
    { key: 'specs.instruction', value: spec.instruction },
    { key: 'specs.tool', value: spec.tool },
    { key: 'specs.reasoning', value: spec.reasoning },
    { key: 'specs.reasoningPrecise', value: spec.reasoningPrecise },
    { key: 'specs.unbiased', value: spec.unbiased },
    { key: 'specs.language', value: spec.language },
    { key: 'specs.family', value: spec.family },
    { key: 'specs.devQuota', value: spec.devQuota },
    { key: 'specs.reqLicense', value: spec.reqLicense },
    { key: 'specs.reqLicenseSpecial', value: spec.reqLicenseSpecial },
    { key: 'specs.reqLicenseDetails', value: spec.reqLicenseDetails },
    { key: 'specs.reqLicenseSoft', value: spec.reqLicenseSoft },
    { key: 'specs.reqLicensePatents', value: spec.reqLicensePatents }
  ]

  return rows.map(row => {
    return `
    <div class="spec-row">
      <div class="spec-label">${t(row.key)}<\/div>
      <div class="spec-value">${row.value}<\/div>
    <\/div>
  `
  }).join('\n')
}
