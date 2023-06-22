import { createI18n } from 'vue-i18n'
import en from './langs/en'
import zhCN from './langs/zh-CN'
import ko from './langs/ko'
import es from './langs/es'

const message = {
  zhCN: {
    ...zhCN,
  },
  en: {
    ...en,
  },
  ko: {
    ...ko,
  },
  es: {
    ...es,
  },
}

const i18n = createI18n({
  locale: 'en', // 设置语言类型
  legacy: false, // 如果要支持 compositionAPI 此项必须设置为 false;
  globalInjection: true, // 全局注册 $t 方法
  messages: message,
})

export default i18n
