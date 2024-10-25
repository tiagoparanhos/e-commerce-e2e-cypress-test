describe('Menu Navigation Tests on Saucedemo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
    });

    it('should open and close the menu', () => {
        cy.get('.bm-burger-button > button').click();
        cy.get('.bm-menu').should('exist');
        cy.wait(500);
        cy.get('.bm-cross-button > button').click();
        cy.get('.bm-menu').should('not.be.visible');
    });

    it('should navigate to the inventory page from the menu', () => {
        cy.get('.bm-burger-button > button').click();
        cy.get('#inventory_sidebar_link').click();
        cy.get('.product_label').should('exist');
    });

});
