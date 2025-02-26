import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name= 'password']",
    loginButton: 'button',
    sectionTitleTopBar: " .oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".oxd-layout-context",
    wrongCredentialAlert: "[role= 'alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericfield: ".oxd-input--active",
    genericField: "[data-v-1f99f73c='']", //Detalhe para letra maiúscula do Field que diferencia do anterior
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
  }


  it.only('User Info Update - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location("pathname").should("equal", '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).type('FirstNameTest')
    cy.get(selectorsList.lastNameField).type('LastNameTest')
    cy.get(selectorsList.genericfield).eq(4).clear().type('Oid')
    cy.get(selectorsList.genericField).eq(4).clear().type('EMPLOY')
    cy.get(selectorsList.genericfield).eq(5).clear().type('DlNumber')
    cy.get(selectorsList.genericfield).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()




  })

  it('login fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })
})