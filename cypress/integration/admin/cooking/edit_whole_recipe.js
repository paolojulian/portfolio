describe('edit_whole_recipe.js', () => {
    beforeEach(() => {
        cy.fixture("cooking").as("cooking")
    })

    it ('edit_recipe', function () {
        const now = Date.now().toString()
        const name = this.cooking.recipe.name + now.slice(-4)

        cy.visit('/admin/recipe')
        // Click the update button
        cy
            .get('button[data-test="recipe table update"]')
            .last()
            .click()
            .wait(100)

        // // Remove its ingredients
        // cy.get('[data-test="recipe update ingredients remove"]')
        // // Remove its procedures
        // cy.get('[data-test="recipe update procedures remove"]')
        //     .click()
        //     .click()
        //     .click()
        //     .click()
        
        // Add the new ingredients
        cy.add_ingredient(0, this.cooking.ingredients[0], 'update')
        cy.get('[data-test="recipe update ingredients add"]').click()
        cy.add_ingredient(1, this.cooking.ingredients[1], 'update')
        cy.get('[data-test="recipe update ingredients add"]').click()
        cy.add_ingredient(2, this.cooking.ingredients[2], 'update')
        // Add the new procedures
        cy.add_procedure(0, this.cooking.procedures[0], 'update')
        cy.get('[data-test="recipe update procedures add"]').click()
        cy.add_procedure(1, this.cooking.procedures[1], 'update')

        // Submit the update
        cy
            .get('[data-test="recipe update submit"]')
            .click()
            .wait(2000)
        
        // Should have success message
        cy
            .get('[data-test="recipe"]')
            .contains('Successfully updated the recipe')

    })
})