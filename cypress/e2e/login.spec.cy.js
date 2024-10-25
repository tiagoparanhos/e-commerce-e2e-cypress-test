describe('Login Tests on Saucedemo', () => {

    it('should display error for incorrect username', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('stand_user'); // typing incorrect username
        cy.get('#password').type('secret_sauce'); // correct password
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('exist'); // error should appear
    });

    it('should successfully log in with correct credentials', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user'); // correct username
        cy.get('#password').type('secret_sauce'); // correct password
        cy.get('#login-button').click();
        cy.get('.product_label').should('exist'); // product page should load
    });

    it('should successfully log out', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.bm-burger-button > button').click();
        cy.get('#logout_sidebar_link').click();
        cy.get('#login-button').should('exist'); // back to login screen
    });

});
