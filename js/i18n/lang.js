import trans from '../../i18n/translations.json'

export const t = (key, params = {}) => {
  const locale = document.documentElement.lang || 'en'
  const seg = key.split('.').reduce((value, part) => value?.[part], trans)
  if (!seg) return key

  let result = typeof seg === 'object'
    ? seg[locale] || seg.en || key
    : seg

  if (typeof result !== 'string') {
    return String(result)
  }

  result = result.replace(/{(.+?)}/g, (match, paramName) => {
    const param = params[paramName] ?? ''
    return param
  })
  return result
}
