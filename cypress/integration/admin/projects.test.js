describe('project_CRUD', () => {
    beforeEach(() => {
        cy.fixture("projects").as("projects")
    })

    it ('add_a_project', function () {
        cy.visit('/admin/projects')

        // NAME
        cy
            .get('input[data-test="project form name"]')
            .type(this.projects.sample.name)
            .should('have.value', this.projects.sample.name)
        
        // DESCRIPTION
        cy
            .get('[data-test="project form description"]')
            .type(this.projects.sample.description)
            .should('have.value', this.projects.sample.description)
        
        // TOOL
        cy
            .get('input[data-test="project form tool"]')
            .type(this.projects.sample.tool)
            .should('have.value', this.projects.sample.tool)

        // EXISTING
        cy
            .get('input[data-test="project form existing"]')
            .check()
        
        // SUBMIT
        cy
            .get('[data-test="project form submit"]')
            .click()
        
        // SHOULD FINISH SUCCESSFULLY
        cy
            .contains('Project Added Successfully')
    })

    it ('reset_form', function () {
        // RESET FORM
        cy.get('input[data-test="project form name"]')
            .should('have.value', '')
        cy.get('input[data-test="project form description"]')
            .should('have.value', '')
        cy.get('input[data-test="project form tool"]')
            .should('have.value', '')
        cy.get('input[data-test="project form existing"]')
            .should('have.value', 'on')
    })

    it ('should_be_added_to_list', function () {
        cy
            .get('[data-test="project table"]')
            .contains(this.projects.sample.name)
    })
})