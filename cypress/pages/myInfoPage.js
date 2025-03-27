class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericfield: ".oxd-input--active",
            genericField: "[data-v-1f99f73c='']", //Detalhe para letra maiúscula do Field que diferencia do anterior
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName, Oid) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().genericfield).eq(4).clear().type(Oid)
    }

    fillEployeeDetails(employee, dlNumber, licenseEx) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employee)
        cy.get(this.selectorsList().genericfield).eq(5).clear().type(dlNumber)
        cy.get(this.selectorsList().genericfield).eq(6).clear().type(licenseEx)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()

    }
}

export default MyInfoPage

