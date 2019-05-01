describe('delete_a_project', () => {
    beforeEach(() => {
        cy.fixture("projects").as("projects")
    })

    it ('delete_the_last_row', function () {
        // Visit Site
        cy.visit('/admin/projects')

        // Delete the last project
        cy
            .get('button[data-test="project table delete"]')
            .last()
            .click()
        
        cy
            .get('div[data-test="project list"]')
            .contains('Project was successfully deleted!')
    })
})