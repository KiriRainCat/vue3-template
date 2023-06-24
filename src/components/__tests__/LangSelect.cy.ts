import LangSelect from '../LangSelect.vue'

describe('<LangSelect />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(LangSelect)
  })
})
