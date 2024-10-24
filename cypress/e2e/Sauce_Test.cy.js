describe ('Test cases on Saucedemo', () => {

    it('testing functions', () => {
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
        cy.get('.bm-burger-button').click();
        cy.get('#logout_sidebar_link').click();
        cy.wait(3000);

        cy.get('#user-name').type('stand_user'); //typing stand_user instead of standard_user
        cy.get('#password').type('secret_sauce'); //correct password
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('exist');
        cy.wait(500);

        cy.reload();
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.product_label').should('exist');
        cy.wait(500);

        cy.get('.bm-burger-button > button').click();
        cy.get('#logout_sidebar_link').click();
        cy.get('#login-button').should('exist');
        cy.wait(500);

        cy.get('#user-name').type('standard_user'); 
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        cy.get('.bm-burger-button > button').click(); 
        cy.get('.bm-menu').should('exist');
        cy.wait(500);
        cy.get('.bm-cross-button > button').click(); 
        cy.get('.bm-menu').should('not.be.visible');

        cy.get(':nth-child(1) > .pricebar > .btn_primary').should('exist'); 
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click();

        cy.get('.shopping_cart_link').click(); 
        cy.get('.item_pricebar > .btn_secondary').should('exist');
        cy.wait(500);

        cy.get('.item_pricebar > .btn_secondary').click();
        cy.get('.item_pricebar > .btn_secondary').should('not.exist');
        cy.wait(500);

        cy.get('.btn_secondary').click(); 
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
        cy.get('.shopping_cart_link').click();

        cy.get('.btn_action').click(); 
        cy.get('[data-test="firstName"]').type('Gabriel'); 
        cy.wait(500);
        cy.get('[data-test="lastName"]').type('Florescu');
        cy.wait(500);
        cy.get('[data-test="postalCode"]').type('123456');
        cy.wait(500);
        cy.get('.btn_primary').click();
        cy.get('.btn_action').should('exist');
        cy.get('.btn_action').click();
        cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get\n                there!\n            ');
        cy.wait(500);

        cy.get('.bm-burger-button > button').click();
        cy.get('#inventory_sidebar_link').click();
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('.inventory_details_desc_container').should('exist');
        cy.wait(500);

        cy.get('.inventory_details_back_button').should('exist');
        cy.get('.inventory_details_back_button').click({ force: true });
        cy.get('.product_label').should('exist');
        cy.wait(500);
    });
})