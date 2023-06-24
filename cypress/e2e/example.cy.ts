// https://on.cypress.io/api

import i18n from '../../src/i18n'
import { langs } from '../../src/i18n'

describe('E2E（端到端）测试示例', () => {
  it('访问应用根目录', () => {
    cy.visit('/')
    cy.title().should('eq', i18n.global.t('messages.appName'))
  })

  it('如果 404，重定向至主页', () => {
    cy.visit('/someUnknownUrl')
    cy.location('href').should('not.include', '/someUnknownUrl')
  })

  it('语言切换组件正常工作', () => {
    cy.visit('/')

    langs.forEach((lang) => {
      cy.get('.el-input__wrapper').click()
      cy.contains(lang.label).click()
      i18n.global.locale.value = lang.key
      cy.contains('div', i18n.global.t('messages.createBy'))
    })
  })
})
