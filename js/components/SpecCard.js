import { t } from './i18n/lang.js'

export function SpecCard(props) {
  const { spec } = props
  const badgeText = spec.devStatus === 'active'
    ? t('developmentStatus.active')
    : spec.devStatus === 'upcoming'
      ? t('developmentStatus.upcoming')
      : spec.devStatus === 'finalizing'
        ? t('developmentStatus.finalizing')
        : spec.devStatus === 'archived'
          ? t('developmentStatus.archived')
          : spec.devStatus
  return `
  <div class="spec-card">
    <div class="card-header">
      <h3>${spec.title}</h3>
      <span class="status-badge">${badgeText}</span>
    </div>
    <div class="card-body">
      <div class="spec-row"><div class="label">${t('specs.name')}</div><div>${spec.name}</div></div>
      <div class="spec-row"><div class="label">${t('specs.parameters')}</div><div>${spec.parameters}</div></div>
      <div class="spec-row"><div class="label">${t('specs.releaseDate')}</div><div>${spec.releaseDate}</div></div>
      <div class="spec-row"><div class="label">${t('specs.language')}</div><div>${spec.language}</div></div>
    </div>
    <div class="card-footer">
      <a href="${spec.href}" class="view-link">${t('models.specDetail')}</a>
    </div>
  </div>
  `
}
