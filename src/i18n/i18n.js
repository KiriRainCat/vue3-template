import { createI18n } from 'vue-i18n'
import en from './langs/en'
import zhcn from './langs/zhcn'
import ko from './langs/ko'
import es from './langs/es'

const message = {
  zhcn: {
    ...zhcn,
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
  legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
  globalInjection: true, // 全局注册$t方法
  messages: message,
})

export default i18n
