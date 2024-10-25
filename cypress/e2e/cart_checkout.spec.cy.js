describe('Cart and Checkout Tests on Saucedemo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
    });

    it('should add and remove items from the cart', () => {
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click(); // add item to cart
        cy.get('.shopping_cart_link').click(); // go to cart
        cy.get('.item_pricebar > .btn_secondary').click(); // remove item from cart
        cy.get('.item_pricebar > .btn_secondary').should('not.exist'); // item removed
    });

    it('should complete checkout process', () => {
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.btn_action').click(); // proceed to checkout

        // Fill in checkout form
        cy.get('[data-test="firstName"]').type('Tiago');
        cy.get('[data-test="lastName"]').type('Mota');
        cy.get('[data-test="postalCode"]').type('123456');
        cy.get('.btn_primary').click(); // submit form

        cy.get('.btn_action').click(); // finish order
        cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get\n                there!\n            ');
    });

});
