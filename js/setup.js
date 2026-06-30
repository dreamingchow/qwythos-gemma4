import { createApp, h } from 'vue'
import * as trans from '../i18n/translations.json'

export const app = createApp({
  render() {
    return h(App, { t: trans })
  }
})
