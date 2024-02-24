class BackendPage {

    /* Locators */
    getFirstName() {
        return cy.get('[name="firstName"]')
    }

    getLastName() {
        return cy.get('[name="lastName"]')
    }

    getEmail() {
        return cy.get('[name="email"]')
    }

    getDOB() {
        return cy.get('[name="dob"]')
    }

    getAddButton() {
        return cy.get('[type="submit"]')
    }

    getDeleteAllButton() {
        return cy.get('.common_undernav__spCsm > button')
    }

    /* Methods */

    createUser(firstName, lastName, email, dob) {
        this.getFirstName().type(firstName)
        this.getLastName().type(lastName)
        this.getEmail().type(email)
        this.getDOB().type(dob)
        this.getAddButton().click()
    }
}

module.exports = BackendPage