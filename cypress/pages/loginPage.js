class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name= 'password']",
            loginButton: 'button',
            wrongCredentialAlert: "[role= 'alert']",
        }

        return selectors
    }

    accessLonginPage() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

}

export default LoginPage