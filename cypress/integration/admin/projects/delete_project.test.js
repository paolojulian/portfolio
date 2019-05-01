describe('delete_a_project', () => {
    beforeEach(() => {
        cy.fixture("projects").as("projects")
    })

    it ('delete_the_last_row', function () {
        let id = null
        // Visit Site
        cy.visit('/admin/projects')

        // Get the ID of the last project
        cy
            .get('[data-test="project table id"]')
            .last()
            .then(el => {
                id = el.text()
                
                cy
                    .get('button[data-test="project table delete"]')
                    .last()
                    .click()
                    .wait(1000)
                
                cy
                    .get('div[data-test="project list"]')
                    .contains('Project was successfully deleted!')

                cy
                    .get(`[data-test="project table row-${id}"]`)
                    .should('not.exist')
            })

        
    })
})