describe('add_projects', () => {
    beforeEach(() => {
        cy.fixture("projects").as("projects")
    })

    it ('add_a_project', function () {
        const now = Date.now().toString()
        const name = this.projects.sample.name + now.slice(-4)
        cy.visit('/admin/projects')

        // IMAGE
        cy
            .upload_file('images/sample_image.png', 'input[data-test="project form image"]')
            .trigger('change')

        // NAME
        cy
            .get('input[data-test="project form name"]')
            .clear()
            .type(name)
            .should('have.value', name)
        
        // DESCRIPTION
        cy
            .get('textarea[data-test="project form description"]')
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

        // PROJECT TYPE
        cy
            .get('select[data-test="project form projectType"]')
            .select(this.projects.sample.projectType)
            .should('have.value', this.projects.sample.projectType)
        
        // SUBMIT
        cy
            .get('[data-test="project form submit"]')
            .click()
        
        // SHOULD FINISH SUCCESSFULLY
        cy
            .contains('Project Added Successfully')
        // RESET FORM
        cy.get('input[data-test="project form name"]')
            .should('have.value', '')
        cy.get('textarea[data-test="project form description"]')
            .should('have.value', '')
        cy.get('input[data-test="project form tool"]')
            .should('have.value', '')
        cy.get('input[data-test="project form existing"]')
            .should('have.value', 'on')
        cy.get('select[data-test="project form projectType"]')
            .should('have.value', '')
        
        // SHOULD BE ON THE LIST
        cy.wait(2000)
        cy
            .get('table[data-test="project table"]')
            .contains(name)
    })
})

// describe('add_invalid_project')
// describe('add_invalid_image')
// describe('add_blank_fields_and_submit')