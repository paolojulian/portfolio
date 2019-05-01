describe('add_projects', () => {
    beforeEach(() => {
        cy.fixture("projects").as("projects")
    })

    it ('add_a_project', function () {
        const now = Date.now().toString()
        const name = this.projects.sample.name + now.slice(-4)
        cy.visit('/admin/projects')

        // IMAGE
        cy.fixture('images/sample_image.png').as('sample_image')

        cy.get('input[data-test="project form image"]')
            .then(function(el) {
                // convert the logo base64 string to a blob
                return Cypress.Blob
                    .base64StringToBlob(this.sample_image, 'image/png')
                    .then((blob) => {
                        el[0].files[0] = blob
                        el[0].dispatchEvent(new Event('change', {bubbles: true}))
            })
        })

        // NAME
        cy
            .get('input[data-test="project form name"]')
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
        
        // SHOULD BE ON THE LIST
        cy
            .get('table[data-test="project table"]')
            .contains(name)
    })
})