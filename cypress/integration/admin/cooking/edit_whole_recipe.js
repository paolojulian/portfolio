describe('edit_whole_recipe.js', () => {
    let id = null
    beforeEach(() => {
        cy.fixture("cooking").as("cooking")
    })

    it ('edit_recipe', function () {
        const now = Date.now().toString()
        const name = this.cooking.recipe.name + now.slice(-4)

        cy.visit('/admin/recipe')

        // Rename the recipe
        cy
            .get('[data-test="cooking update recipe_name"]')
            .clear()
            .type(name)
            .should('have.value', name)

        // Remove its ingredients
        cy
            .get('[data-test="cooking update ingredients remove"]')
            .click()
            .click()
            .click()
            .click()
        // Remove its procedures
        cy
            .get('[data-test="cooking update procedures remove"]')
            .click()
            .click()
            .click()
            .click()
        
        // Add the new ingredients
        cy.add_ingredient(0, this.cooking.ingredients[0])
        cy.get('[data-test="cooking update ingredients add"]').click()
        cy.add_ingredient(0, this.cooking.ingredients[1])
        cy.get('[data-test="cooking update ingredients add"]').click()
        cy.add_ingredient(0, this.cooking.ingredients[2])
        // Add the new procedures
        cy.add_procedure(0, this.cooking.procedures[0])
        cy.get('[data-test="cooking update procedures add"]').click()
        cy.add_procedure(0, this.cooking.procedures[1])

        // Submit the update
        cy
            .get('[data-test="cooking update submit"]')
            .click()
            .wait(2000)
        
        // Should have success message
        cy
            .get('[data-test="cooking"]')
            .contains('Successfully edited data')

        // New recipe name should have changed in the table
        cy
            .get('[data-test="cooking table"]')
            .contains(name)
    })
})