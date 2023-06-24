// https://on.cypress.io/api

import i18n from '../../src/i18n'
import { langs } from '../../src/i18n'

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.title().should('eq', i18n.global.t('messages.appName'))
  })

  it('redirects back to home if 404', () => {
    cy.visit('/someUnknownUrl')
    cy.location('href').should('not.include', '/someUnknownUrl')
  })

  it('switches languages successfully', () => {
    cy.visit('/')

    langs.forEach((lang) => {
      cy.get('.el-input__wrapper').click()
      cy.contains(lang.label).click()
      i18n.global.locale.value = lang.key
      cy.contains('div', i18n.global.t('messages.createBy'))
    })
  })
})
