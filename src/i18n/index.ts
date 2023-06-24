// @ts-nocheck
import { createI18n } from 'vue-i18n'
import en from './langs/en.json'
import zhCN from './langs/zh-CN.json'
import ko from './langs/ko.json'
import es from './langs/es.json'

export default createI18n({
  locale: 'en', // 设置语言类型
  legacy: false, // 如果要支持 compositionAPI 此项必须设置为 false;
  globalInjection: true, // 全局注册 $t 方法
  messages: {
    en,
    zhCN,
    ko,
    es,
  },
})

type Lang = {
  key: any
  label: string
}

export const langs: Array<Lang> = [
  { key: 'en', label: 'English' },
  { key: 'zhCN', label: '中文' },
  { key: 'es', label: 'Español' },
  { key: 'ko', label: '한국어' },
]
