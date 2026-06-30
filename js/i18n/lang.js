import trans from '../../i18n/translations.json'

export const t = (key, params = {}) => {
  const locale = document.documentElement.lang
  const seg = trans[key]
  if (!seg) return key

  let result = seg[locale] || seg['en']
  result = result.replace(/{(.+?)}/g, (match, paramName) => {
    const param = params[paramName] ?? ''
    return param
  })
  return result
}
