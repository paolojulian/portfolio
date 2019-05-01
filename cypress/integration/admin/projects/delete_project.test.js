describe('delete_a_project', () => {
    beforeEach(() => {
        cy.fixture("projects").as("projects")
    })

    it ('complete_form', function () {
        // Visit Site
        cy.visit('/admin/projects')

        // Select a Project
        // Delete it
        // Check if contains successfully deleted
    })
})