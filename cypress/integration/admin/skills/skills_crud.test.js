describe('Skills_add', () => {
    beforeEach(() => {
        cy.fixture("skills").as("skills")
    })

    it ('add_a_skill', function () {
        const now = Date.now().toString()
        const name = this.skills.sample.name + now.slice(-4)

        cy.visit('/admin/skills')

        // NAME
        cy
            .get('input[data-test="skills form name"]')
            .clear()
            .type(name)
            .should('have.value', name)
        // LEVEL
        cy
            .get('input[data-test="skills form level"]')
            .clear()
            .type(this.skills.sample.level)
            .should('have.value', this.skills.sample.level)
        
        // TYPE [1: Programming, 2: Framework/Others]
        cy
            .get('select[data-test="skills form type"]')
            .select(this.skills.sample.type)
        
        // SUBMIT
        cy
            .get('button[data-test="skills form submit"]')
            .click()
            .wait(2000)

        // FORM SHOULD RESET ITS VALUE
        cy
            .get('input[data-test="skills form name"]')
            .should('have.value', '')
        cy
            .get('input[data-test="skills form level"]')
            .should('have.value', '0')
        cy
            .get('select[data-test="skills form type"]')
            .should('have.value', '')
        
        // Should have success message appear
        cy
            .get('[data-test="skills add"]')
            .contains(`Successfully added ${name}`)
    })
    it ('update_a_skill', function () {
    })
    it ('remove_a_skill', function () {
    })
})