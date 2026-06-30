import * as trans from '../../i18n/translations.json'

export default {
  id: 'gemma4',
  name: 'Gemma 4',
  title: trans.specs.name,
  parameters: '4B',
  releaseDate: '2025',
  language: trans.specs.language,
  familyOpen: trans.specs.familyOpen,
  supportsMultiLanguage: trans.specs.supportsMultiLanguage,
  quantization: trans.specs.quantization,
  family: trans.specs.family,
  accurate: trans.specs.accurate,
  inference: trans.specs.inference,
  pretraining: trans.specs.pretraining,
  codeTasks: trans.specs.codeTasks,
  instruction: trans.specs.instruction,
  tool: trans.specs.tool,
  reasoning: trans.specs.reasoning,
  reasoningPrecise: trans.specs.reasoningPrecise,
  unbiased: trans.specs.unbiased,
  devQuota: trans.specs.devQuota,
  reqLicense: {
    title: trans.specs.reqLicense,
    text: trans.specs.reqLicense
  },
  reqLicenseSpecial: trans.specs.reqLicenseSpecial,
  reqLicenseDetails: trans.specs.reqLicenseDetails,
  reqLicenseSoft: trans.specs.reqLicenseSoft,
  reqLicensePatents: trans.specs.reqLicensePatents,
  href: '/models/gemma4',
  desc: trans.home.description.en,
  moreInfo: {
    title: trans.home.greeting.en,
    desc: trans.home.description.en,
    link: null,
    dataSources: ['Gemma documentation', 'Gemma repository', 'BibTeX'],
    announcement: {
      title: trans.models.title.en,
      desc: trans.models.subtitle.en
    }
  }
}
