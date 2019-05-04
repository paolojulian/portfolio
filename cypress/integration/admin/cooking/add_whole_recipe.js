describe('add_whole_recipe.js', () => {
    beforeEach(() => {
        cy.fixture("cooking").as("cooking")
    })

    it ('add_recipe', function () {
        const now = Date.now().toString()
        const name = this.cooking.sample.name + now.slice(-4)
        const category = this.cooking.sample.category
        const ingredients = this.cooking.sample.ingredients
        const procedures = this.cooking.sample.procedures

        cy.visit('/admin/recipe')
        // Enter Name
        cy
            .get('[data-test="recipe add name"]')
            .type(name, {force: true})
            .should('have.value', name)

        // Select category
        cy
            .get('[data-test="recipe add category"]')
            .select(category)
            .should('have.value', category)

        // Upload IMAGE
        cy.upload_file('images/sample_image.png', 'input[data-test="recipe add image"]')

        // Enter Ingredients
        for (let c = 0, l = ingredients.length; c < l; c++) {
            cy.add_ingredient(c, ingredients[c])

            // So that will not add an ingredient on the last loop
            if (c < l - 1) {
                cy.get('[data-test="recipe add ingredients add"]').click()
            }
        }

        // Enter Procedures
        for (let c = 0, l = procedures.length; c < l; c++) {
            cy.add_procedure(c, procedures[c])

            // So that will not add a procedure on the last loop
            if (c < l - 1) {
                cy.get('[data-test="recipe add procedures add"]').click()
            }
        }

        // Submit
        cy
            .get('button[data-test="recipe add submit"]')
            .click()
            .wait(2000)

        // Reset form
        cy.should_reset('[data-test="recipe add name"]')
        cy.should_reset('[data-test="recipe add ingredient-0 name"]', null)
        cy.should_reset('[data-test="recipe add ingredient-0 quantity"]')
        cy.should_reset('[data-test="recipe add ingredient-0 description"]')
        cy.should_reset('[data-test="recipe add procedure-0 name"]')
        cy
            .get('[data-test="recipe add ingredient-1"]')
            .should('not.exist')
        cy
            .get('[data-test="recipe add procedure-1"]')
            .should('not.exist')

        // Table should contain the added recipe name
        cy
            .get('[data-test="recipe table"]')
            .contains(name)

    })
})